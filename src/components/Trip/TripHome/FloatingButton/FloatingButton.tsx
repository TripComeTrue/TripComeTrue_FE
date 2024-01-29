import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Text } from '@/components/common';
import * as Styled from './FloatingButton.styles';
import PlusIcon from '/images/plus.svg';
import ScheduleIcon from '/images/schedule.svg';
import WriteIcon from '/images/write.svg';
import useClickOutside from '@/hooks/common/useClickOutside';

const FloatingButton = () => {
  const [isOn, setIsOn] = useState(false);
  const modalRef = useRef(null);

  const onClickClose = (): void => {
    setIsOn(false);
  };

  const onClickToggle = (): void => {
    setIsOn((prev) => !prev);
  };

  useClickOutside(modalRef, onClickClose);

  return (
    <Styled.Container $isOn={isOn}>
      <Styled.ButtonsContainer ref={modalRef}>
        {isOn && (
          <Styled.Menu $isOn={isOn}>
            <Link to="tripplan">
              <Styled.WriteContainer>
                <Text color="white" fontWeight={700}>
                  여행 계획 짜기
                </Text>
                <Styled.WriteButton>
                  <img src={ScheduleIcon} alt="schedule icon" />
                </Styled.WriteButton>
              </Styled.WriteContainer>
            </Link>
            <Link to="tripplanrecord">
              <Styled.WriteContainer>
                <Text color="white" fontWeight={700}>
                  여행 후기 작성하기
                </Text>
                <Styled.WriteButton>
                  <img src={WriteIcon} alt="write icon" />
                </Styled.WriteButton>
              </Styled.WriteContainer>
            </Link>
          </Styled.Menu>
        )}
        <Styled.ToggleButton onClick={onClickToggle} $isOn={isOn}>
          <img src={PlusIcon} alt="plus icon" />
        </Styled.ToggleButton>
      </Styled.ButtonsContainer>
    </Styled.Container>
  );
};

export default FloatingButton;
