import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setCookie } from '@/utils/cookie';
import useLoginCheck from '@/hooks/Auth/useLoginCheck';

function Social() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const email = searchParams.get('email');
  const name = searchParams.get('name');

  const { accessToken } = useLoginCheck();

  useEffect(() => {
    // accessToken이 아직 없고 parameter에 token 값이 있으면 쿠키에 저장(1시간 만료)
    if (!accessToken && token) {
      setCookie('accessToken', token, 3600);
      navigate('/home', { replace: true });
    }
    if (!accessToken || !token) {
      navigate('/', { replace: true });
    }
  }, [token, email, name, navigate, accessToken]);

  return <div>Social</div>;
}

export default Social;
