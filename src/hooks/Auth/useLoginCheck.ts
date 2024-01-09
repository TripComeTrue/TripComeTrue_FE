import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '@/utils/cookie';

function useLoginCheck() {
  const navigate = useNavigate();
  const accessToken = getCookie('accessToken');

  useEffect(() => {
    if (accessToken) {
      navigate('/home', { replace: true });
    }
  }, [accessToken, navigate]);
  return { accessToken };
}

export default useLoginCheck;
