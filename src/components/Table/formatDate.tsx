export default function formatDate(date: Date):string {
  const dn: number = date.getDate();
  let dd: string = dn.toString();
  if (dn < 10) dd = '0' + dd;
  const mn: number = date.getMonth();
  let mm: string = mn.toString();
  if (mn < 10) mm = '0' + mm;
  const yn: number = date.getDate();
  let yy: string = yn.toString();
  if (yn < 10) yy = '0' + yy;
  const hn: number = date.getHours();
  let hh: string = hn.toString();
  if (hn < 10) hh = '0' + hh;
  const minn: number = date.getMinutes();
  let minm: string = minn.toString();
  if (minn < 10) minm = '0' + minm;
  const secn: number = date.getSeconds();
  let secm: string = secn.toString();
  if (secn < 10) secm = '0' + secm;
  return dd + '.' + mm + '.' + yy + ' ' + hh + ':' + minm + ':' + secm;
}
