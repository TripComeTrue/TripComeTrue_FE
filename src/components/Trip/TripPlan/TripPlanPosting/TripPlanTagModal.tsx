/* eslint-disable react/jsx-props-no-spreading */
 
import { useEffect, useState } from 'react';
import { Modal as MuiModal } from '@mui/material';
import { IoCloseCircle } from 'react-icons/io5';
import { TripPlanTagModalProps } from './TripPlanTagModal.types';
import {
  SelectModalContent,
  SelectModalWrap,
} from '@/components/common/Modal/SelectModal.styles';
import { Button, Text } from '@/components/common';
import { TRIP_TAGS } from '@/constants/hashtags';
import * as Styled from './TripPlanTagModal.styles';

/**
 * 여행 태그 종류를 선택하는 모달 입니다.
 * @param open 열림 / 닫힘 여부를 전달합니다.
 * @param onClose 닫혔을때 실행할 함수를 전달합니다.
 * @param register useForm hook이 반환하는 register 함수를 전달합니다.(폼을 등록하는 용도)
 * @param setValue useForm hook이 반환하는 setValue 함수를 전달합니다.(url옆 X 버튼에 필요)
 * @param onSubmit form이 submit 되었을때 실행될 함수를 전달합니다.(폼을 제출할때 할 일을 정하는 용도)
 * @returns 모달 컴포넌트를 반환 합니다.
 */
function TripPlanTagModal({
  open,
  onClose,
  register,
  watch,
  setValue,
  onSubmit,
}: TripPlanTagModalProps) {
  const [isDisabled, setIsDisabled] = useState(true);
  const currentType = watch('type');
  const currentUrl = watch('url');

  const onClickInputClear = () => {
    setValue('url', '');
  };

  useEffect(() => {
    if (currentType !== undefined && currentUrl !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [currentType, currentUrl]);

  return (
    <MuiModal open={open} onClose={onClose}>
      <SelectModalWrap>
        <SelectModalContent>
          <form onSubmit={onSubmit}>
            <Styled.TripPlanTagBox>
              <Text fontSize={14} fontWeight={700}>
                여행 태그 종류를 선택해주세요
              </Text>
              {TRIP_TAGS.map((tripTag) => (
                <Styled.TripPlanTagLabel
                  htmlFor={tripTag.value}
                  key={tripTag.value}>
                  <input
                    type="radio"
                    id={tripTag.value}
                    value={tripTag.value}
                    {...register('type')}
                  />
                  {tripTag.label}
                </Styled.TripPlanTagLabel>
              ))}
            </Styled.TripPlanTagBox>
            <Styled.TripPlanTagBox>
              <Text fontSize={14} fontWeight={700}>
                여행 태그 URL을 입력해주세요
              </Text>
              <Styled.TripPlanInputWrap>
                <Styled.TripPlanUrlInput type="text" {...register('url')} />
                <Styled.TripPlanUrlInputClear onClick={onClickInputClear}>
                  <IoCloseCircle />
                </Styled.TripPlanUrlInputClear>
              </Styled.TripPlanInputWrap>
            </Styled.TripPlanTagBox>
            <Styled.TripPlanBtnWrap>
              <Button size="lg" variants="gray" onClick={onClose}>
                이전
              </Button>
              <Button
                type="submit"
                size="lg"
                variants="primary"
                disabled={isDisabled}>
                완료
              </Button>
            </Styled.TripPlanBtnWrap>
          </form>
        </SelectModalContent>
      </SelectModalWrap>
    </MuiModal>
  );
}

export default TripPlanTagModal;
