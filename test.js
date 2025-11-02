// Simple test file
const { greet, add } = require('./index.js');

console.log("Running tests...");

// Test 1: greet function
const greetResult = greet("World");
if (greetResult === "Hello, World!") {
    console.log("✓ Test 1 passed: greet function works correctly");
} else {
    console.log("✗ Test 1 failed: greet function");
    process.exit(1);
}

// Test 2: add function
const addResult = add(5, 7);
if (addResult === 12) {
    console.log("✓ Test 2 passed: add function works correctly");
} else {
    console.log("✗ Test 2 failed: add function");
    process.exit(1);
}

console.log("\nAll tests passed! ✓");