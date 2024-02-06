export default function isTwoWords(str: string) {
  const words = str.trim().split(/\s+/);
  return words.length === 2;
}
