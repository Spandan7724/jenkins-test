// Simple Node.js application
function greet(name) {
    return `Hello, ${name}!`;
}

function add(a, b) {
    return a + b;
}

console.log(greet("Jenkins"));
console.log("2 + 3 =", add(2, 3));
console.log("Application running successfully!");

module.exports = { greet, add };