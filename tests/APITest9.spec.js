import { test, expect } from '@playwright/test';

test('DELETE to verifyLogin API with valid details should return 200 and give an error message', async ({ request }) => {
  const apiUrl = 'https://automationexercise.com/api/verifyLogin';

  // Send DELETE request with valid details
  const response = await request.delete(apiUrl, {
    form: {
      email: 'testmk12@test.com',
      password: 'Tester1!'        
    }
  });

  // Verify status code
  expect(response.status()).toBe(200);

  // Get response as text
  const responseBody = await response.text();
  console.log('Response body:', responseBody);

   // Check the error message
  expect(responseBody).toContain(
    'This request method is not supported.'
  );
});
