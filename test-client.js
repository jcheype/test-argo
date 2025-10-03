import fetch from 'node-fetch';

const baseUrl = 'http://localhost:3000/trpc';

async function testHelloWorld() {
  try {
    // Test without input
    console.log('Testing helloWorld without input...');
    const response1 = await fetch(`${baseUrl}/helloWorld`);
    const result1 = await response1.json();
    console.log('Response:', JSON.stringify(result1, null, 2));
    
    // Test with name input
    console.log('\nTesting helloWorld with name input...');
    const response2 = await fetch(`${baseUrl}/helloWorld?input=${encodeURIComponent(JSON.stringify({name: 'TypeScript'}))}`);
    const result2 = await response2.json();
    console.log('Response:', JSON.stringify(result2, null, 2));
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testHelloWorld();
