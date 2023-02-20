//将搜索页中所展示的数据中的keyword加粗 起强调作用
export default function fieldBold(str: string, seed: string): string {
  return str.replace(seed, `<strong>${seed}</strong>`);
}
