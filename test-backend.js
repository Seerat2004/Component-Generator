// Test script to check backend connectivity
const axios = require('axios');

const BASE_URL = 'https://component-generator-cy7z.onrender.com';

async function testBackend() {
  console.log('🔍 Testing Component Generator Backend...\n');
  
  try {
    // Test root endpoint
    console.log('1. Testing root endpoint...');
    const rootResponse = await axios.get(`${BASE_URL}/`);
    console.log('✅ Root endpoint working:', rootResponse.data);
    
    // Test health endpoint
    console.log('\n2. Testing health endpoint...');
    const healthResponse = await axios.get(`${BASE_URL}/api/health`);
    console.log('✅ Health endpoint working:', healthResponse.data);
    
    // Test CORS endpoint
    console.log('\n3. Testing CORS endpoint...');
    const corsResponse = await axios.get(`${BASE_URL}/api/cors-test`);
    console.log('✅ CORS endpoint working:', corsResponse.data);
    
    // Test auth endpoint (should return 404 for GET without path)
    console.log('\n4. Testing auth endpoint...');
    try {
      const authResponse = await axios.get(`${BASE_URL}/api/auth`);
      console.log('❌ Auth endpoint should not accept GET requests');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log('✅ Auth endpoint correctly returns 404 for GET requests');
      } else {
        console.log('❌ Unexpected error:', error.message);
      }
    }
    
    console.log('\n🎉 Backend is running and accessible!');
    
  } catch (error) {
    console.error('❌ Backend test failed:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    }
  }
}

testBackend(); 