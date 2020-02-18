export default function findBiggerValue(list) {
  let res = 0;
  list.map(item => {
    res += item.value;
    return true;
  });
  return res;
}
