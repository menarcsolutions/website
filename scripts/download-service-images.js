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

if (!pexelsApiKey) {
  pexelsApiKey = process.env.PEXELS_API_KEY;
}

if (!pexelsApiKey) {
  console.error("Error: PEXELS_API_KEY is not defined in environment variables or .env file.");
  process.exit(1);
}

const publicServiceImgDir = path.join(__dirname, '../public/images/services');

// Create directory if it doesn't exist
if (!fs.existsSync(publicServiceImgDir)) {
  fs.mkdirSync(publicServiceImgDir, { recursive: true });
}

const servicesList = [
  { slug: "corporate-websites", queries: ["corporate office", "modern tech workplace", "coding screen"] },
  { slug: "ecommerce-platforms", queries: ["ecommerce warehouse", "online shopping checkout", "delivering parcel pack"] },
  { slug: "booking-systems", queries: ["calendar appointment book", "reception desk booking", "doctor scheduling patients"] },
  { slug: "business-dashboards", queries: ["financial analytics screen", "business chart dashboard", "pointing at statistics presentation"] },
  { slug: "custom-web-applications", queries: ["software developer laptop", "coding dynamic interface", "wireframe design app"] },
  { slug: "landing-pages", queries: ["website conversion funnel", "person typing phone lead", "business presentation stats"] },
  { slug: "lead-management", queries: ["sales manager phone", "team office meeting pipeline", "crm interface screen"] },
  { slug: "whatsapp-workflows", queries: ["smartphone screen chat", "customer support typing", "office notifications tablet"] },
  { slug: "email-sequences", queries: ["email inbox screen", "typing laptop keyboard", "digital marketing analytics"] },
  { slug: "inquiry-automation", queries: ["robotic virtual assistant", "customer service headset", "ai chip server hardware"] },
  { slug: "crm-integrations", queries: ["sales team database", "office screen charts", "modern network hardware"] },
  { slug: "internal-tasks", queries: ["business process flow", "office work coordination", "typing office desk board"] },
  { slug: "seo-optimization", queries: ["google search ranking", "organic traffic charts", "analytics keyword research"] },
  { slug: "speed-optimization", queries: ["speed performance meter", "fast loading technology network", "accelerating coding code"] },
  { slug: "analytics-tracking", queries: ["marketing analytics graphs", "pointing at data screen", "conversion tracking code"] },
  { slug: "managed-hosting", queries: ["server hosting racks", "cloud security database", "monitors server control room"] }
];

function searchPexels(query, apiKey) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'Authorization': apiKey
      }
    };
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=10&orientation=landscape`;
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`Pexels API error: Status Code ${res.statusCode}. Body: ${data}`));
          return;
        }
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
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
          reject(new Error(`Failed to download: Status Code ${response.statusCode} for ${targetUrl}`));
          return;
        }
        const fileStream = fs.createWriteStream(filePath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
        fileStream.on('error', (err) => {
          reject(err);
        });
      }).on('error', (err) => {
        reject(err);
      });
    }
    getUrl(url);
  });
}

async function run() {
  const usedPhotoIds = new Set();
  console.log(`Starting download for 16 services (3 images each = 48 images)...`);

  for (const service of servicesList) {
    console.log(`\n=======================================`);
    console.log(`Processing service: "${service.slug}"`);

    for (let i = 0; i < 3; i++) {
      const query = service.queries[i % service.queries.length];
      const imageIndex = i + 1;
      const targetName = `${service.slug}-${imageIndex}.jpeg`;
      const targetPath = path.join(publicServiceImgDir, targetName);

      console.log(`- Image ${imageIndex}/3 query: "${query}"`);

      try {
        const searchResults = await searchPexels(query, pexelsApiKey);
        if (!searchResults.photos || searchResults.photos.length === 0) {
          console.warn(`  No photos found for query: "${query}". Using backup term.`);
          const backupResults = await searchPexels("web developer technology", pexelsApiKey);
          searchResults.photos = backupResults.photos || [];
        }

        // Find first unused photo ID
        let selectedPhoto = null;
        for (const photo of searchResults.photos) {
          if (!usedPhotoIds.has(photo.id)) {
            selectedPhoto = photo;
            usedPhotoIds.add(photo.id);
            break;
          }
        }

        if (!selectedPhoto && searchResults.photos.length > 0) {
          selectedPhoto = searchResults.photos[0];
          console.warn(`  All photos returned were already used. Reusing photo ID ${selectedPhoto.id}`);
        }

        if (selectedPhoto) {
          const imageUrl = selectedPhoto.src.large2x || selectedPhoto.src.large || selectedPhoto.src.original;
          console.log(`  Downloading photo ID ${selectedPhoto.id} to ${targetPath}...`);
          await download(imageUrl, targetPath);
        } else {
          console.error(`  Could not find any photos for query "${query}".`);
        }
      } catch (err) {
        console.error(`  Error downloading image for query "${query}":`, err.message);
      }

      // Respect API limits
      await new Promise(r => setTimeout(r, 800));
    }
  }

  console.log(`\n=======================================`);
  console.log(`Completed downloading service images!`);
}

run();
