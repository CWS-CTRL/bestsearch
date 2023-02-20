//将参数中的空格变成+
export default function transPath(path: string): string {
  return path.replaceAll(/\s+/g, "+");
}
