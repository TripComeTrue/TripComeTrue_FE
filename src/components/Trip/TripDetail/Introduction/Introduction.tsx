import { Avatar, Text } from '@/components/common';
import * as Styled from './Introduction.styles';
import MarkIcon from '/images/mark.svg';
import BookMarkIcon from '/images/bookMark.svg';
import DownloadIcon from '/images/download.svg';

const Introduction = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.CreatorContainer>
          <Avatar size={32} src="https://source.unsplash.com/random" />
          <Text fontWeight={700}>빠니보틀</Text>
          <Styled.Mark src={MarkIcon} alt="mark icon" />
        </Styled.CreatorContainer>
        <Styled.SaveContainer>
          <img src={DownloadIcon} alt="download icon" />
          <Styled.BookMarkContainer>
            <img src={BookMarkIcon} alt="bookmark icon" />
            <Text fontSize={10}>999+</Text>
          </Styled.BookMarkContainer>
        </Styled.SaveContainer>
      </Styled.Header>
      <div />
      <div />
      <div />
      <div />
    </Styled.Container>
  );
};

export default Introduction;
