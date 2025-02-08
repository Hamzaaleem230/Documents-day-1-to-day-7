import dotenv from 'dotenv';
import { createClient } from '@sanity/client';
import { Buffer } from 'buffer';
import fetch from 'node-fetch';

// Load environment variables
dotenv.config({ path: '.env.local' });

// Sanity client configuration
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

// Log Sanity configuration to debug environment variables
console.log('Sanity Client Config:', {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: !!process.env.NEXT_PUBLIC_SANITY_TOKEN ? 'Loaded' : 'Missing',
});

// Function to upload an image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl} - Status: ${response.status}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error(`Failed to upload image: ${imageUrl}`, error.message);
    return null;
  }
}

// Function to upload a product to Sanity
async function uploadProduct(product) {
  try {
    console.log(`Processing product: ${product.name}`);

    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'products',
        name: product.name,
        description: product.description,
        price: product.price,
        image: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        category: product.category,
        discountPercent: product.discountPercent,
        isNew: product.isNew,
        colors: product.colors,
        sizes: product.sizes
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.name} uploaded successfully:`, createdProduct);
    } else {
      console.warn(`Product skipped due to image upload failure: ${product.name}`);
    }
  } catch (error) {
    console.error(`Error uploading product: ${product.name}`, error.message);
  }
}

// Function to fetch and import products
async function importProducts() {
  try {
    console.log('Fetching products...');
    const response = await fetch('https://template1-neon-nu.vercel.app/api/products');

    if (!response.ok) {
      throw new Error(`Failed to fetch products - Status: ${response.status}`);
    }

    const products = await response.json();
    console.log(`Fetched ${products.length} products.`);

    for (const product of products) {
      await uploadProduct(product);
    }

    console.log('Product import completed.');
  } catch (error) {
    console.error('Error fetching or importing products:', error.message);
  }
}

// Start the import process
importProducts();
