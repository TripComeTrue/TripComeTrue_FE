import { useNavigate } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import {
  MdOutlineBookmarks,
  MdOutlineEdit,
  MdOutlineSupportAgent,
} from 'react-icons/md';
import { GoChevronRight } from 'react-icons/go';
import { Avatar, Text } from '@/components/common';
import * as Styled from './MyPageTopProfile.styles';
import { setCookie } from '@/utils/cookie';
import { getMemberDetail } from '@/apis/mypage';

function MyPageTopProfile() {
  const navigate = useNavigate();
  const { data } = useSuspenseQuery({
    queryKey: ['member/detail'],
    queryFn: getMemberDetail,
  });
  const onClickEdit = () => {
    navigate('confirm-password');
  };
  const onClickLogout = () => {
    setCookie('accessToken', '', 0);
    navigate('/');
  };

  return (
    <Styled.MyPageTopProfileWrap>
      <Styled.MyPageTopProfileBox>
        <Styled.MyPageTopProfileInfo>
          <Avatar src={data.data.profileImage} />
          <div>
            <Text tag="p" fontWeight={600}>
              {data.data.nickname}
            </Text>
            <Styled.MyPageTopProfileLevel>비기너</Styled.MyPageTopProfileLevel>
          </div>
        </Styled.MyPageTopProfileInfo>
        <Styled.MyPageTopProfileBtns>
          <Styled.MyPageTopProfileBtn
            size="sm"
            variants="gray-border"
            rounded="sm"
            onClick={onClickEdit}>
            <MdOutlineEdit /> 계정관리
          </Styled.MyPageTopProfileBtn>
          <Styled.MyPageTopProfileBtn
            size="sm"
            variants="text"
            rounded="sm"
            onClick={onClickLogout}
            type="button">
            로그아웃
          </Styled.MyPageTopProfileBtn>
        </Styled.MyPageTopProfileBtns>
      </Styled.MyPageTopProfileBox>
      <Styled.MyPageTopProfileMenusWrap>
        <Styled.MyPageTopProfilePointMenu to="point">
          <Text fontSize={10} color="gray">
            보유 트립포인트
          </Text>
          <Styled.MyPageTopProfilePointText>
            <Text fontSize={14} fontWeight={700}>
              {data.data.totalPoint}p
            </Text>
            <GoChevronRight />
          </Styled.MyPageTopProfilePointText>
        </Styled.MyPageTopProfilePointMenu>
        <Styled.MyPageTopProfileMenuItem to="wishlist">
          <MdOutlineBookmarks />
          <Text fontSize={14} color="gray">
            보관리스트
          </Text>
        </Styled.MyPageTopProfileMenuItem>
        <Styled.MyPageTopProfileMenuItem to="faq">
          <MdOutlineSupportAgent />
          <Text fontSize={14} color="gray">
            고객센터
          </Text>
        </Styled.MyPageTopProfileMenuItem>
      </Styled.MyPageTopProfileMenusWrap>
    </Styled.MyPageTopProfileWrap>
  );
}

export default MyPageTopProfile;
