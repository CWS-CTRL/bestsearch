//计算增长率
export default function growth(n1: number, n2: number): string {
  const tag = n2 >= n1;
  return tag
    ? `${Math.floor((n2 / n1 - 1) * 100)}%`
    : `-${Math.floor((n1 / n2 - 1) * 100)}%`;
}
