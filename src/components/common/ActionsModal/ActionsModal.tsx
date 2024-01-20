import { MouseEvent, useState } from 'react';
import { Menu } from '@mui/material';
import { AiOutlineMore } from 'react-icons/ai';
import { Text } from '@/components/common';
import * as Styled from './ActionsModal.styles';

const ActionsModal = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Styled.ToggleBtn
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <AiOutlineMore />
      </Styled.ToggleBtn>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <Styled.MenuItem
          style={{
            borderBottom: '1px solid #dcdcdc',
          }}>
          <Text fontSize={12}>수정하기</Text>
        </Styled.MenuItem>
        <Styled.MenuItem>
          <Text fontSize={12}>삭제하기</Text>
        </Styled.MenuItem>
      </Menu>
    </div>
  );
};

export default ActionsModal;
