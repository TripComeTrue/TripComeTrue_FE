import { useSuspenseQuery } from '@tanstack/react-query';
import MyPagePlanWrap from './MyPagePlan.styles';
import MyPagePlanItem from './MyPagePlanItem';
import { SelectModal, Share } from '@/components/common';
import useModal from '@/hooks/common/useModal';
import {
  ShareKakaoIcon,
  ShareLinkIcon,
} from '@/components/common/Share/Share.styles';
import { getMyPlan } from '@/apis/mypage';
import MyPageItemNone from '../MyPageItemNone/MyPageItemNone';

function MyPagePlan() {
  const { open, handleOpen, handleClose } = useModal();
  const { data } = useSuspenseQuery({
    queryKey: ['mypage/plan'],
    queryFn: getMyPlan,
    retry: 0,
  });
  return (
    <div>
      {data?.data.content.length === 0 && <MyPageItemNone />}
      <MyPagePlanWrap>
        {data?.data.content.map((plan) => (
          <MyPagePlanItem key={plan.id} plan={plan} onOpenShare={handleOpen} />
        ))}
      </MyPagePlanWrap>
      <SelectModal open={open} onClose={handleClose} title="공유하기">
        <Share icon={<ShareKakaoIcon />}>카카오톡으로 공유하기</Share>
        <Share icon={<ShareLinkIcon />}>링크 복사하기</Share>
      </SelectModal>
    </div>
  );
}

export default MyPagePlan;
