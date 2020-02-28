export default function findBiggerValue(list) {
  let res = 0;
  list.forEach(item => {
    res += item.value;
  });
  return res;
}
