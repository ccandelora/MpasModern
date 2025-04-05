const fs = require('fs');
const path = require('path');
const https = require('https');
const fetch = require('node-fetch');

const PEXELS_API_KEY = 'Vp2FtssSVSlYt993M9QabtpBtJt52NgzNNSTK4ptms7M4t7wkn517lGN';

const searchQueries = [
  { query: "policy review document", filename: "review.jpg" },
  { query: "strategic planning meeting", filename: "planning.jpg" },
  { query: "team collaboration office", filename: "development.jpg" },
  { query: "professional training seminar", filename: "training.jpg" }
];

async function searchPexelsImage(query) {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`,
      {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }
    
    const data = await response.json();
    return data.photos[0]?.src?.large || null;
  } catch (error) {
    console.error('Error fetching Pexels image:', error);
    return null;
  }
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const writeStream = fs.createWriteStream(filepath);
        response.pipe(writeStream);
        writeStream.on('finish', () => {
          writeStream.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function main() {
  // Create images directory if it doesn't exist
  const imagesDir = path.join(process.cwd(), 'public', 'images', 'process');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  for (const { query, filename } of searchQueries) {
    console.log(`Searching for "${query}"...`);
    const imageUrl = await searchPexelsImage(query);
    
    if (imageUrl) {
      console.log(`Downloading ${filename}...`);
      const filepath = path.join(imagesDir, filename);
      await downloadImage(imageUrl, filepath);
      console.log(`Downloaded ${filename} successfully`);
    } else {
      console.error(`Failed to find image for "${query}"`);
    }
  }
}

main().catch(console.error); 