import { MouseEvent, useState } from 'react';
import { Menu } from '@mui/material';
import * as Styled from './Filter.styles';
import { Text } from '..';
import { FilterProps } from './Filter.types';

/**
 * @param first: 메뉴 첫 번째 항목
 * @param second: 메뉴 두 번째 항목
 * @param selectedFilter: 선택된 필터
 * @param setSelectedFilter: 선택된 필터를 바꿀 수 있는 setState
 */

const Filter = ({
  first,
  second,
  selectedFilter,
  setSelectedFilter,
}: FilterProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickFilter = (event: MouseEvent<HTMLElement>): void => {
    const target = event.target as HTMLLIElement;

    setSelectedFilter(target.innerText);
    handleClose();
  };

  return (
    <div>
      <Styled.ToggleBtn
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        {selectedFilter} ▼
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
          onClick={onClickFilter}
          style={{
            borderBottom: '1px solid #dcdcdc',
          }}>
          <Text fontSize={12}>{first}</Text>
        </Styled.MenuItem>
        <Styled.MenuItem onClick={onClickFilter}>
          <Text fontSize={12}>{second}</Text>
        </Styled.MenuItem>
      </Menu>
    </div>
  );
};

export default Filter;
