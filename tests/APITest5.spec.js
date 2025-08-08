import { test, expect } from '@playwright/test';

test('POST to searchProduct API should return searched products list', async ({ request }) => {
  const apiUrl = 'https://automationexercise.com/api/searchProduct';

  // Send POST request with form data
  const response = await request.post(apiUrl, {
    form: { search_product: 'top' }
  });

  // Verify status code is 200
  expect(response.status()).toBe(200);

  // Get response body as JSON
  const body = await response.json();
  console.log('Response body:', body);

  // Check that response contains products
  expect(body.products.length).toBeGreaterThan(0);

  // Check if product names/descriptions include 'top'
  const allContainSearchTerm = body.products.some(
    product => product.name.toLowerCase().includes('top')
  );
  expect(allContainSearchTerm).toBe(true);
});
