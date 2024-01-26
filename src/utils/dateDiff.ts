function calcDateDiff(date1: string, date2: string): number {
  // 입력된 날짜 문자열을 Date 객체로 변환
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  // 날짜 차이를 밀리초 단위로 계산
  const timeDifference = secondDate.getTime() - firstDate.getTime();

  // 밀리초를 일로 변환하여 반환
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}

export default calcDateDiff;
