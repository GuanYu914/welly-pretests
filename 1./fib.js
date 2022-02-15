// recursion.ver
function fib(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  return fib(n - 2) + fib(n - 1);
}

// memorized.ver
function fib_memorized(n, cache = []) {
  if (cache[n]) return cache[n];
  if (n === 0 || n === 1) {
    cache[n] = 1;
    return cache[n];
  }
  cache[n] = fib_memorized(n - 2, cache) + fib_memorized(n - 1, cache);
  return cache[n];
}

// test cases
console.log(fib(10));
console.log(fib(40));
console.log(fib_memorized(10));
console.log(fib_memorized(40));
