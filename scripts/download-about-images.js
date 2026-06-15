const fs = require('fs');
const path = require('path');
const https = require('https');

const dotenvPath = path.join(__dirname, '../.env');
let pexelsApiKey = '';

if (fs.existsSync(dotenvPath)) {
  const envContent = fs.readFileSync(dotenvPath, 'utf8');
  const match = envContent.match(/PEXELS_API_KEY\s*=\s*(.*)/);
  if (match) {
    pexelsApiKey = match[1].trim();
  }
}

if (!pexelsApiKey) pexelsApiKey = process.env.PEXELS_API_KEY;

if (!pexelsApiKey) {
  console.error("Error: PEXELS_API_KEY is not defined.");
  process.exit(1);
}

const outputDir = path.join(__dirname, '../public/images/about');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const aboutImages = [
  { name: 'menarc-solutions-team-chennai', query: 'professional tech startup team office' },
  { name: 'menarc-web-development-workspace', query: 'modern developer workspace laptop coding' },
  { name: 'menarc-solutions-meeting-clients', query: 'business meeting presentation client office' },
  { name: 'menarc-automation-technology', query: 'business automation technology digital' },
];

function searchPexels(query, apiKey) {
  return new Promise((resolve, reject) => {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=10&orientation=landscape`;
    https.get(url, { headers: { Authorization: apiKey } }, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function download(url, filePath) {
  return new Promise((resolve, reject) => {
    function getUrl(targetUrl) {
      https.get(targetUrl, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          getUrl(response.headers.location);
          return;
        }
        if (response.statusCode !== 200) {
          reject(new Error(`Failed: ${response.statusCode}`));
          return;
        }
        const fileStream = fs.createWriteStream(filePath);
        response.pipe(fileStream);
        fileStream.on('finish', () => { fileStream.close(); resolve(); });
        fileStream.on('error', reject);
      }).on('error', reject);
    }
    getUrl(url);
  });
}

async function run() {
  const usedIds = new Set();
  console.log('Downloading 4 about page images...\n');

  for (const img of aboutImages) {
    const targetPath = path.join(outputDir, `${img.name}.jpeg`);
    if (fs.existsSync(targetPath)) {
      console.log(`✓ Already exists: ${img.name}.jpeg`);
      continue;
    }
    console.log(`Searching: "${img.query}"...`);
    try {
      const results = await searchPexels(img.query, pexelsApiKey);
      let selected = null;
      for (const photo of (results.photos || [])) {
        if (!usedIds.has(photo.id)) {
          selected = photo;
          usedIds.add(photo.id);
          break;
        }
      }
      if (selected) {
        const imageUrl = selected.src.large2x || selected.src.large;
        console.log(`  Downloading photo ID ${selected.id} → ${img.name}.jpeg`);
        await download(imageUrl, targetPath);
        console.log(`  ✓ Saved`);
      } else {
        console.warn(`  No photo found for: ${img.query}`);
      }
    } catch (err) {
      console.error(`  Error: ${err.message}`);
    }
    await new Promise(r => setTimeout(r, 800));
  }

  console.log('\n✅ Done! All about page images downloaded to public/images/about/');
}

run();
