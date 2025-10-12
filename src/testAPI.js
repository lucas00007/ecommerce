import { generateClient } from 'aws-amplify/api';
import { createProduct, createOrder } from './graphql/mutations';
import { listProducts, listOrders } from './graphql/queries';

const client = generateClient();

// Test: Add a product to database
export const testAddProduct = async () => {
  try {
    const newProduct = {
      name: "Test Alpaca Sweater",
      description: "Beautiful handcrafted alpaca sweater",
      price: 49.99,
      category: "Men",
      size: "Large",
      image: "/assets/Man-Sweater3.jpg",
      images: ["/assets/Man-Sweater3.jpg", "/assets/Man-Sweater4.jpg"],
      inStock: true,
      quantity: 10
    };

    const result = await client.graphql({
      query: createProduct,
      variables: { input: newProduct }
    });

    console.log('✅ Product added:', result.data.createProduct);
    return result.data.createProduct;
  } catch (error) {
    console.error('❌ Error adding product:', error);
  }
};

// Test: Get all products from database
export const testGetProducts = async () => {
  try {
    const result = await client.graphql({
      query: listProducts
    });

    console.log('✅ Products from database:', result.data.listProducts.items);
    return result.data.listProducts.items;
  } catch (error) {
    console.error('❌ Error getting products:', error);
  }
};

// Test: Save an order to database
export const testSaveOrder = async () => {
  try {
    const newOrder = {
      orderNumber: `ORD-${Date.now()}`,
      customerName: "Test Customer",
      customerEmail: "test@example.com",
      items: JSON.stringify([
        { name: "Test Product", quantity: 1, price: 49.99 }
      ]),
      total: 54.99,
      shippingAddress: JSON.stringify({
        address: "123 Test St",
        city: "Test City",
        state: "CA",
        zip: "12345"
      }),
      status: "pending"
    };

    const result = await client.graphql({
      query: createOrder,
      variables: { input: newOrder }
    });

    console.log('✅ Order saved:', result.data.createOrder);
    return result.data.createOrder;
  } catch (error) {
    console.error('❌ Error saving order:', error);
  }
};
