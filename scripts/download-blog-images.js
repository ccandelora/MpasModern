import fs from 'fs';
import path from 'path';
import https from 'https';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PEXELS_API_KEY = 'Vp2FtssSVSlYt993M9QabtpBtJt52NgzNNSTK4ptms7M4t7wkn517lGN';

const searchQueries = [
  { 
    query: "police badge certificate professional document official", 
    filename: "accreditation-standards.jpg",
    orientation: "landscape",
    size: "large"
  },
  { 
    query: "police officer computer modern technology professional", 
    filename: "technology-compliance.jpg",
    orientation: "landscape",
    size: "large"
  },
  { 
    query: "police officer community handshake professional uniform", 
    filename: "community-trust.jpg",
    orientation: "landscape",
    size: "large"
  }
];

async function searchPexelsImage(query, orientation = 'landscape', size = 'large') {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&orientation=${orientation}&size=${size}&per_page=5`,
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
    if (!data.photos || data.photos.length === 0) {
      throw new Error('No images found');
    }

    // Find an image that looks professional and matches our criteria
    const photos = data.photos;
    // Sort by size to get the highest quality images first
    photos.sort((a, b) => {
      const aSize = parseInt(a.width) * parseInt(a.height);
      const bSize = parseInt(b.width) * parseInt(b.height);
      return bSize - aSize;
    });

    const photo = photos[0]; // Get the highest quality image
    return {
      url: photo.src.large2x || photo.src.large || photo.src.original,
      photographer: photo.photographer,
      photographerUrl: photo.photographer_url,
      source: 'Pexels',
      sourceUrl: photo.url
    };
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
  const imagesDir = path.join(process.cwd(), 'client', 'public', 'images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // Create attribution file
  const attributionPath = path.join(imagesDir, 'image-attribution.md');
  const attributionStream = fs.createWriteStream(attributionPath, { flags: 'w' });
  attributionStream.write('# Image Attributions\n\n');

  for (const { query, filename, orientation, size } of searchQueries) {
    console.log(`Searching for "${query}"...`);
    const imageData = await searchPexelsImage(query, orientation, size);
    
    if (imageData) {
      console.log(`Downloading ${filename}...`);
      const filepath = path.join(imagesDir, filename);
      await downloadImage(imageData.url, filepath);
      console.log(`Downloaded ${filename} successfully`);

      // Add attribution
      attributionStream.write(`## ${filename}\n`);
      attributionStream.write(`- Photographer: [${imageData.photographer}](${imageData.photographerUrl})\n`);
      attributionStream.write(`- Source: [${imageData.source}](${imageData.sourceUrl})\n\n`);
    } else {
      console.error(`Failed to find image for "${query}"`);
    }
  }

  attributionStream.end();
  console.log('\nDone! Check image-attribution.md for image credits.');
}

main().catch(console.error); 