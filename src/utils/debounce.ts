//防抖函数
export default function debounce(fn: Function, delay: number) {
  let timeout: any = null;

  return function () {
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn.apply(null, arguments);
    }, delay);
  };
}
