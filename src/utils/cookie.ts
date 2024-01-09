/**
 * 쿠키를 추가 합니다.
 * @param name 쿠키의 키값 / name: string
 * @param value 쿠키 값 / value: string
 * @param maxAge 유지 시간 / type: number
 */
export function setCookie(name: string, value: string, maxAge: number) {
  // const expirationDate = new Date();
  // expirationDate.setDate(expirationDate.getDate() + days);

  const cookieValue = `${encodeURIComponent(name)}=${encodeURIComponent(
    value,
  )}; max-age=${maxAge}; path=/`;

  document.cookie = cookieValue;
}

export function getCookie(name: string): string | undefined {
  const cookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1];

  return cookieValue || undefined;
}
