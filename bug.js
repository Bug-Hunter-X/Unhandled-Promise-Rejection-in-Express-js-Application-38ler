const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    // Error handling missing here! 
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  const success = Math.random() < 0.5;  // 50% chance of failure
  if (success) {
    return 'Operation successful';
  } else {
    throw new Error('Asynchronous operation failed');
  }
}