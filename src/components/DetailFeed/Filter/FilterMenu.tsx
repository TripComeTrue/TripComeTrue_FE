import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Text } from '@/components/common';
import polygon from '/polygon.svg';
import { FilterProps, OrderOption } from './Filter.types';

const FilterMenu = ({ orderOption }: FilterProps) => {
  const [filterOption, setFilterOption] = useState(orderOption);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (option: OrderOption) => {
    setFilterOption(option);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <Text fontSize={16}>{filterOption}</Text>
        <img src={polygon} alt="polygon" />
      </Button>
      <Menu
        className="filter-menu"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem onClick={() => handleClose(orderOption)}>
          {orderOption}
        </MenuItem>
        <MenuItem onClick={() => handleClose('보관순')}>보관순</MenuItem>
      </Menu>
    </div>
  );
};

export default FilterMenu;
