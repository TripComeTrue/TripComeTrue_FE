import {
  MdOutlineBookmarks,
  MdOutlineEdit,
  MdOutlineSupportAgent,
} from 'react-icons/md';
import { GoChevronRight } from 'react-icons/go';
import { Skeleton } from '@mui/material';
import { Text } from '@/components/common';
import * as Styled from './MyPageTopProfile.styles';

function MyPageTopProfile() {
  return (
    <Styled.MyPageTopProfileWrap>
      <Styled.MyPageTopProfileBox>
        <Styled.MyPageTopProfileInfo>
          <Skeleton variant="circular" width={66} height={66} />
          <div>
            <Skeleton variant="text" width={100} />
            <Skeleton variant="text" width={40} />
          </div>
        </Styled.MyPageTopProfileInfo>
        <Styled.MyPageTopProfileBtns>
          <Styled.MyPageTopProfileBtn
            size="sm"
            variants="gray-border"
            rounded="sm">
            <MdOutlineEdit /> 계정관리
          </Styled.MyPageTopProfileBtn>
          <Styled.MyPageTopProfileBtn
            size="sm"
            variants="text"
            rounded="sm"
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
              0p
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
