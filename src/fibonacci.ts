/**
 * Returns the nth Fibonacci number
 * @param n - The index of the Fibonacci number to return
 * @returns The nth Fibonacci number
 */
export function fibonacci(n: number): number {
  if (n < 0) {
    throw new Error('Fibonacci numbers are undefined for negative numbers');
  }
  if (n === 0 || n === 1) {
    return n; // base case
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // recursive case
}
