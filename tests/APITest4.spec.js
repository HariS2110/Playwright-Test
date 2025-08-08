import { test, expect } from '@playwright/test';

test('PUT request to brandsList API should return error message', async ({ request }) => {
  const apiUrl = 'https://automationexercise.com/api/brandsList';

  // Send PUT request
  const response = await request.put(apiUrl);

  // Log status just to see
  console.log('Status code:', response.status());

  // Expect 200 since API always returns this
  expect(response.status()).toBe(200);

  // Read body text
  const body = await response.text();
  console.log('Response body:', body);

  // Assert the error message is present
  expect(body).toContain('This request method is not supported.');
});
