export default function formatValue(length) {
  if (length >= 5) {
    return '10px';
  }

  if (length >= 4) {
    return '12px';
  }

  if (length >= 3) {
    return '13px';
  }

  return '14px';
}
