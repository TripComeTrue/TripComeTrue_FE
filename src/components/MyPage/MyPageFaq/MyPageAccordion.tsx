import { useRef, useState } from 'react';
import { Text } from '@/components/common';
import * as Styled from './MyPageAccordion.styles';
import { MyPageAccordionProps } from './MyPageAccordion.types';

function MyPageAccordion({ item }: MyPageAccordionProps) {
  const content = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0px');

  const toggleAccordion = () => {
    if (!content.current) return;
    setIsOpen(!isOpen);
    setHeight(isOpen ? '0px' : `${content.current.scrollHeight}px`);
  };

  return (
    <Styled.MyPageAccordionWrap>
      <Styled.MyPageAccordionTitle onClick={toggleAccordion}>
        <Text fontSize={12} color="primary">
          Q.{' '}
        </Text>
        {item.title}
      </Styled.MyPageAccordionTitle>
      <Styled.MyPageAccordionDesc ref={content} $height={height}>
        <Text fontSize={12} tag="p">
          {item.desc}
        </Text>
      </Styled.MyPageAccordionDesc>
    </Styled.MyPageAccordionWrap>
  );
}

export default MyPageAccordion;
