import { HomeAllCity } from '@/components/Home';
import { Button } from '@/components/common';
import useModal from '@/hooks/common/useModal';

function City() {
  const { open, handleOpen, handleClose } = useModal();
  return (
    <div>
      {open && <HomeAllCity handleClose={handleClose} />}
      <Button size="md" variants="primary" onClick={handleOpen}>
        열기
      </Button>
    </div>
  );
}

export default City;
