//匹配月份
export default function matchDate(n1: string, n2: string): string {
  const matchRules = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const n1Date: string[] = n1.split("-");
  const n2Date: string[] = n2.split("-");

  return `
    ${matchRules[Number(n1Date[1])]} 
    ${n1Date[0]}  -  
    ${matchRules[Number(n2Date[1])]} 
    ${n2Date[0]}
    `;
}
