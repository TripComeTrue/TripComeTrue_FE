import { useState } from 'react';
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
import { PlanContent } from '@/@types/mypage.types';
import { copyClipboard } from '@/utils/copyClipboard';

function MyPagePlan() {
  const { open, handleOpen, handleClose } = useModal();
  const { data } = useSuspenseQuery({
    queryKey: ['mypage/plan'],
    queryFn: getMyPlan,
    retry: 0,
  });
  const [selectedPlan, setSelectedPlan] = useState<PlanContent>();
  const onClickLinkCopy = () => {
    const BASE_URL = 'https://tripcometrue.vercel.app/';
    if (selectedPlan) {
      copyClipboard(`${BASE_URL}/trip/tripPlan/view/${selectedPlan.id}`);
    }
  };

  return (
    <div>
      {data?.data.content.length === 0 && <MyPageItemNone />}
      <MyPagePlanWrap>
        {data?.data.content.map((plan) => (
          <MyPagePlanItem
            key={plan.id}
            plan={plan}
            onOpenShare={handleOpen}
            setPlanItem={setSelectedPlan}
          />
        ))}
      </MyPagePlanWrap>
      <SelectModal open={open} onClose={handleClose} title="공유하기">
        <Share icon={<ShareKakaoIcon />}>카카오톡으로 공유하기</Share>
        <Share icon={<ShareLinkIcon />} onClickShare={onClickLinkCopy}>
          링크 복사하기
        </Share>
      </SelectModal>
    </div>
  );
}

export default MyPagePlan;
