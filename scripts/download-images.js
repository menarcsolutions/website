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

const blogDir = path.join(__dirname, '../content/blog');
const publicBlogImgDir = path.join(__dirname, '../public/images/blog');

// Create the directory if it doesn't exist
if (!fs.existsSync(publicBlogImgDir)) {
  fs.mkdirSync(publicBlogImgDir, { recursive: true });
}

function searchPexels(query, apiKey) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'Authorization': apiKey
      }
    };
    // Clean query for better search results
    const cleanQuery = query.replace(/[?:]/g, '').trim();
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(cleanQuery)}&per_page=15&orientation=landscape`;
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
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
  const usedPhotoIds = new Set();

  console.log(`Found ${files.length} blog posts to check.`);

  for (const file of files) {
    const filePath = path.join(blogDir, file);
    const slug = file.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Extract primary keyword
    const kwMatch = fileContent.match(/primaryKeyword:\s*"(.*?)"/);
    if (!kwMatch) {
      console.warn(`Could not find primary keyword in ${file}. Skipping.`);
      continue;
    }
    const keyword = kwMatch[1];
    console.log(`\n---------------------------------------`);
    console.log(`Processing "${slug}" with keyword: "${keyword}"`);

    try {
      const results = await searchPexels(keyword, pexelsApiKey);
      if (!results.photos || results.photos.length === 0) {
        console.warn(`No photos found on Pexels for keyword: "${keyword}". Trying fallback query.`);
        // Try fallback query like "web development"
        const fallbackResults = await searchPexels("web design", pexelsApiKey);
        results.photos = fallbackResults.photos || [];
      }

      // Find first unused photo ID
      let selectedPhoto = null;
      for (const photo of results.photos) {
        if (!usedPhotoIds.has(photo.id)) {
          selectedPhoto = photo;
          usedPhotoIds.add(photo.id);
          break;
        }
      }

      if (!selectedPhoto && results.photos.length > 0) {
        selectedPhoto = results.photos[0];
        console.warn(`All photos returned for "${keyword}" are already used. Reusing photo ID ${selectedPhoto.id}`);
      }

      if (selectedPhoto) {
        const imageUrl = selectedPhoto.src.large2x || selectedPhoto.src.large || selectedPhoto.src.original;
        const localImgName = `${slug}.jpeg`;
        const localImgPath = path.join(publicBlogImgDir, localImgName);

        console.log(`Downloading photo ID ${selectedPhoto.id} from ${imageUrl} to ${localImgPath}...`);
        await download(imageUrl, localImgPath);

        // Update frontmatter image field
        // Replacing: image: "..." with local path
        const updatedContent = fileContent.replace(/image:\s*".*?"/, `image: "/images/blog/${localImgName}"`);
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`Updated frontmatter for ${file} with local image path.`);
      } else {
        console.error(`No photos found for keyword "${keyword}" even with fallback!`);
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
    
    // Sleep 1 second to respect API limits
    await new Promise(r => setTimeout(r, 1000));
  }
  console.log("\n=======================================");
  console.log("Completed downloading and updating images successfully!");
}

run();
