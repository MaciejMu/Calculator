export function operation(a: number, b: number, operator: string): number {
  return operator === "+" ? a + b : a - b;
}
