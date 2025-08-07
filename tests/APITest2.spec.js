import { test, expect } from '@playwright/test';

test('POST /api/productsList should return 405', async ({ request }) => {
  const response = await request.post('https://automationexercise.com/api/productsList');

  // Validate the response status
  expect(response.status()).toBe(200);
  const responseBody = await response.text();
  expect(responseBody).toContain('This request method is not supported');

});