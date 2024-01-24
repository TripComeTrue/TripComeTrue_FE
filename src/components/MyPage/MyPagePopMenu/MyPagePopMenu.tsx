import { MouseEvent, useState } from 'react';
import { HiOutlineDotsHorizontal, HiOutlineDotsVertical } from 'react-icons/hi';
import { MdArrowOutward, MdOutlineDelete, MdOutlineEdit } from 'react-icons/md';
import { Menu, MenuItem } from '@mui/material';
import { Text } from '@/components/common';
import * as Styled from './MyPagePopMenu.styles';
import { MyPagePopMenuProps } from './MyPagePopMenu.types';

function MyPagePopMenu({
  vertical,
  onOpenShare,
  plan,
  setPlanItem,
}: MyPagePopMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setPlanItem(undefined);
  };
  const handleShareClick = () => {
    onOpenShare();
    handleClose();
    setPlanItem(plan);
  };

  return (
    <>
      <Styled.MyPagePopMenuBtn
        id="mypage-edit-button"
        aria-controls={open ? 'mypage-edit-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variants="text"
        onClick={handleClick}
        $vertical={`${vertical}`}>
        {vertical ? <HiOutlineDotsVertical /> : <HiOutlineDotsHorizontal />}
      </Styled.MyPagePopMenuBtn>
      <Menu
        id="mypage-edit-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'mypage-edit-button',
        }}>
        <MenuItem onClick={handleClose} dense>
          <Styled.MyPagePopMenuIcon fontSize={16}>
            <MdOutlineEdit />
          </Styled.MyPagePopMenuIcon>
          <Text fontSize={12}>수정하기</Text>
        </MenuItem>
        <MenuItem onClick={handleClose} dense>
          <Styled.MyPagePopMenuIcon fontSize={16}>
            <MdOutlineDelete />
          </Styled.MyPagePopMenuIcon>
          <Text fontSize={12}>삭제하기</Text>
        </MenuItem>
        <MenuItem onClick={handleShareClick} dense>
          <Styled.MyPagePopMenuIcon fontSize={16}>
            <MdArrowOutward />
          </Styled.MyPagePopMenuIcon>
          <Text fontSize={12}>공유하기</Text>
        </MenuItem>
      </Menu>
    </>
  );
}

export default MyPagePopMenu;
