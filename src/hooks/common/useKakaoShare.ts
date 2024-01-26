import { useEffect } from 'react';

declare global {
  interface Window {
    Kakao: any;
  }
  const Kakao: any;
}

interface KakaoShareArgs {
  thumb?: string;
  title: string;
  desc: string;
  link: string;
}

function useKakaoShare({ thumb, title, desc, link }: KakaoShareArgs) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js';
    script.integrity =
      'sha384-mXVrIX2T/Kszp6Z0aEWaA8Nm7J6/ZeWXbL8UpGRjKwWe56Srd/iyNmWMBhcItAjH';
    script.crossOrigin = 'anonymous';
    script.async = true;
    document.body.appendChild(script);

    // init 체크
    if (window.Kakao) {
      if (!window.Kakao.isInitialized())
        window.Kakao.init(import.meta.env.VITE_KAKAO_API_KEY);
    }
    return () => {
      if (window.Kakao) window.Kakao.cleanup();
      document.body.removeChild(script);
    };
  }, [window.Kakao]);

  const handleKakaoShare = () => {
    if (!thumb) {
      window.Kakao.Share.sendCustom({
        templateId: 102805,
        templateArgs: {
          TITLE: title, // 제목 텍스트 ${TITLE}
          DESC: desc, // 설명 텍스트 ${DESC}
          LINK: link, // 이동할 주소
        },
      });
    } else {
      window.Kakao.Share.sendCustom({
        templateId: 103456,
        templateArgs: {
          THU: thumb,
          TITLE: title, // 제목 텍스트 ${TITLE}
          DESC: desc, // 설명 텍스트 ${DESC}
          LINK: link, // 이동할 주소
        },
      });
    }
  };

  return { handleKakaoShare };
}

export default useKakaoShare;
