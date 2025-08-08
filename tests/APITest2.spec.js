import { test, expect } from '@playwright/test';

test('POST to productsList API should return error message', async ({ request }) => {
  const apiUrl = 'https://automationexercise.com/api/productsList';

  // Send POST request
  const response = await request.post(apiUrl);

  // Log status just to see
  console.log('Status code:', response.status());

  // Expect 200 because API always returns 200
  expect(response.status()).toBe(200);

  // Get response body
  const body = await response.text();
  console.log('Response body:', body);

  // Verify message is in response
  expect(body).toContain('This request method is not supported.');
});
