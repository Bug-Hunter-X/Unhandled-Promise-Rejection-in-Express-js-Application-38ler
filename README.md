# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Express.js applications: the absence of proper error handling for asynchronous operations.  When an asynchronous operation (like a database query or external API call) fails, the application might crash silently without providing any informative error messages.

The `bug.js` file shows the flawed code, while `bugSolution.js` provides a corrected version with robust error handling.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Observe that the server might crash or behave unexpectedly due to unhandled promise rejections.
4. Run `node bugSolution.js` to see the improved, more resilient version.

## Key Learning

Always handle potential errors in asynchronous operations within Express.js routes to ensure application stability and provide better user experiences.  Use `try...catch` blocks for synchronous code and `.catch()` for promises to gracefully handle exceptions.