import { useNavigate } from 'react-router-dom';
import {
  MdOutlineBookmarks,
  MdOutlineEdit,
  MdOutlineSupportAgent,
} from 'react-icons/md';
import { GoChevronRight } from 'react-icons/go';
import { Avatar, Text } from '@/components/common';
import * as Styled from './MyPageTopProfile.styles';

function MyPageTopProfile() {
  const navigate = useNavigate();
  const onClickEdit = () => {
    navigate('confirm-password');
  };

  return (
    <Styled.MyPageTopProfileWrap>
      <Styled.MyPageTopProfileBox>
        <Styled.MyPageTopProfileInfo>
          <Avatar src="/busan.jpeg" />
          <div>
            <Text tag="p" fontWeight={600}>
              룰루랄라
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
          <Styled.MyPageTopProfileBtn size="sm" variants="text" rounded="sm">
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
              320p
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
