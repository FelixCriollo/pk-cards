export function zeroPad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

export function toCapitalCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}