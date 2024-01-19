import { useQuery } from '@tanstack/react-query';
import MyPagePlanWrap from './MyPagePlan.styles';
import MyPagePlanItem from './MyPagePlanItem';
import { SelectModal, Share } from '@/components/common';
import useModal from '@/hooks/common/useModal';
import {
  ShareKakaoIcon,
  ShareLinkIcon,
} from '@/components/common/Share/Share.styles';
import { getMyPlan } from '@/apis/mypage';

function MyPagePlan() {
  const { open, handleOpen, handleClose } = useModal();
  const { data, isLoading } = useQuery({
    queryKey: ['mypage/plan'],
    queryFn: getMyPlan,
  });
  if (isLoading) return null;
  return (
    <>
      <MyPagePlanWrap>
        {data?.data.map((plan) => (
          <MyPagePlanItem key={plan.id} plan={plan} onOpenShare={handleOpen} />
        ))}
      </MyPagePlanWrap>
      <SelectModal open={open} onClose={handleClose} title="공유하기">
        <Share icon={<ShareKakaoIcon />}>카카오톡으로 공유하기</Share>
        <Share icon={<ShareLinkIcon />}>링크 복사하기</Share>
      </SelectModal>
    </>
  );
}

export default MyPagePlan;
