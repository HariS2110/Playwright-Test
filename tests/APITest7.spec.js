import { test, expect } from '@playwright/test';

test('POST to verifyLogin API with valid details should return 200 and User exists', async ({ request }) => {
  const apiUrl = 'https://automationexercise.com/api/verifyLogin';

  // Send POST request with valid email & password
  const response = await request.post(apiUrl, {
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

  // Check response message
  expect(responseBody).toContain('User exists!');
});
