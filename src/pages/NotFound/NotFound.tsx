import { useNavigate } from 'react-router-dom';
import { Button, Text } from '@/components/common';
import notfoundSvg from '@/assets/notfound.svg';
import * as Styled from './NotFound.styles';

function NotFound() {
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <Styled.NotFoundImgWrap>
        <img src={notfoundSvg} alt="404 not found" />
      </Styled.NotFoundImgWrap>
      <Styled.NotFoundContent>
        <Text tag="h2" fontSize={18} fontWeight={700}>
          Page Not Found
        </Text>
        <Text tag="p" fontSize={14} fontWeight={600}>
          요청하신 페이지를 찾을 수 없습니다.
        </Text>
        <Button
          type="button"
          variants="primary"
          size="md"
          onClick={onClickBack}>
          뒤로가기
        </Button>
      </Styled.NotFoundContent>
    </div>
  );
}

export default NotFound;
