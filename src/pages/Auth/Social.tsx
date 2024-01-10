import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setCookie } from '@/utils/cookie';
import useLoginCheck from '@/hooks/Auth/useLoginCheck';
import MAX_AGE from '@/constants/maxAge';

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
      setCookie('accessToken', token, MAX_AGE);
      navigate('/home', { replace: true });
    }
    if (!accessToken || !token) {
      navigate('/', { replace: true });
    }
  }, [token, email, name, navigate, accessToken]);

  return <div>Social</div>;
}

export default Social;
