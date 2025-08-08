import { test, expect } from '@playwright/test';

test('POST to searchProduct API without search_product param should return error message', async ({ request }) => {
  const apiUrl = 'https://automationexercise.com/api/searchProduct';

  // Send POST request without the required param
  const response = await request.post(apiUrl, {
    form: {}
  });

  // Verify status code is 200
  expect(response.status()).toBe(200);

  // Get response as text
  const responseBody = await response.text();
  console.log('Response body:', responseBody);

  // Check the error message
  expect(responseBody).toContain(
    'Bad request, search_product parameter is missing in POST request.'
  );
});
