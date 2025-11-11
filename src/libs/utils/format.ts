// Example shared utility that can be used across apps
export function formatCount(count: number): string {
  return `Count: ${count}`;
}

export function isEven(num: number): boolean {
  return num % 2 === 0;
}
