import { useState } from 'react';

/**
 * open 여부, 열기 닫기 함수를 생성해줍니다.
 * @returns `open`: 열기 닫기 여부 / `handleClose`: open을 false로 변경하는 함수 / `handleOpen`: open을 true로 변경하는 함수
 */
function useModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return { open, setOpen, handleOpen, handleClose };
}

export default useModal;
