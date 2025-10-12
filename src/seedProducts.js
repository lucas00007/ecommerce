import { generateClient } from 'aws-amplify/api';
import { createProduct } from './graphql/mutations';
import { products } from './data/products';

const client = generateClient();

// Add all products from products.js to database
export const seedProducts = async () => {
  console.log('🌱 Seeding products to database...');
  
  for (const product of products) {
    try {
      const productData = {
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        size: product.size || null,
        color: product.color || null,
        image: product.image,
        images: product.images || [product.image],
        inStock: true,
        quantity: 50
      };

      await client.graphql({
        query: createProduct,
        variables: { input: productData }
      });

      console.log(`✅ Added: ${product.name}`);
    } catch (error) {
      console.error(`❌ Error adding ${product.name}:`, error);
    }
  }
  
  console.log('🎉 All products seeded!');
};

// Run this once to seed your database
// seedProducts();
