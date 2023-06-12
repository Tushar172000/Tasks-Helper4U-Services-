const express = require('express');
const app = express();
const port = 3000;

app.get('/prime-numbers/:number', (req, res) => {
  const number = parseInt(req.params.number);
  const primes = [];

  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  res.json(primes);
});

function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
