import { test, expect } from '@playwright/test';

test('POST to verifyLogin API with no email should return 200 and give an error message', async ({ request }) => {
  const apiUrl = 'https://automationexercise.com/api/verifyLogin';

  // Send POST request with valid password but no email
  const response = await request.post(apiUrl, {
    form: {
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
    'Bad request, email or password parameter is missing in POST request.'
  );
});
