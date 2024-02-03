export default function convertToKoreanTime(str: string) {
  try {
    const timeUnits: { [key: string]: string } = {
      month: "개월 전",
      year: "년 전",
      week: "주 전",
      day: "일 전",
    };

    const splitStr = str.split(" ");
    const timeNumber = splitStr[0];
    const timeUnit = splitStr[1].replace(/s?$/, "");
    const koreanTimeUnit = timeUnits[timeUnit];

    return `${timeNumber}${koreanTimeUnit}`;
  } catch (error) {
    return "";
  }
}
