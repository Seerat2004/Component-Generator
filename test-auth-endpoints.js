// Test script to verify auth endpoints
const axios = require('axios');

const BASE_URL = 'https://component-generator-cy7z.onrender.com/api';

async function testAuthEndpoints() {
  console.log('🔍 Testing Auth Endpoints...\n');
  
  try {
    // Test signup endpoint
    console.log('1. Testing signup endpoint...');
    const signupData = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'testpassword123'
    };
    
    try {
      const signupResponse = await axios.post(`${BASE_URL}/auth/signup`, signupData);
      console.log('✅ Signup endpoint working:', signupResponse.status);
    } catch (error) {
      if (error.response?.status === 400 && error.response?.data?.message === 'User already exists') {
        console.log('✅ Signup endpoint working (user already exists)');
      } else {
        console.log('❌ Signup endpoint error:', error.response?.status, error.response?.data);
      }
    }
    
    // Test login endpoint
    console.log('\n2. Testing login endpoint...');
    const loginData = {
      email: 'test@example.com',
      password: 'testpassword123'
    };
    
    try {
      const loginResponse = await axios.post(`${BASE_URL}/auth/login`, loginData);
      console.log('✅ Login endpoint working:', loginResponse.status);
    } catch (error) {
      console.log('❌ Login endpoint error:', error.response?.status, error.response?.data);
    }
    
    // Test invalid endpoint
    console.log('\n3. Testing invalid endpoint...');
    try {
      const invalidResponse = await axios.get(`${BASE_URL}/auth/invalid`);
      console.log('❌ Invalid endpoint should return 404');
    } catch (error) {
      if (error.response?.status === 404) {
        console.log('✅ Invalid endpoint correctly returns 404');
      } else {
        console.log('❌ Unexpected error:', error.response?.status);
      }
    }
    
    console.log('\n🎉 Auth endpoints test completed!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testAuthEndpoints(); 