// tests/api/products.spec.ts
import { test, expect } from '@playwright/test';

test('GET /api/productsList', async ({ request }) => {
  // Send GET request to the API endpoint
  const response = await request.get('https://automationexercise.com/api/productsList');

  // Assert the response status code is 200
  expect(response.status()).toBe(200);

  // Parse the JSON response body
  const responseBody = await response.json();

  // Assert the response structure and data
  expect(responseBody).toHaveProperty('products'); 
  expect(Array.isArray(responseBody.products)).toBeTruthy(); 

});