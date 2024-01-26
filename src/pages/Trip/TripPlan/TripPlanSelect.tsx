import { Suspense, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, RetryErrorBoundary, SimpleNav } from '@/components/common';
import { MyPagePlanSkeleton } from '@/components/MyPage';
import Container from '@/components/common/Container';
import TripPlanSelectList from '@/components/Trip/TripPlan/TripPlanPostingPlan/TripPlanSelect/TripPlanSelectList';
import * as Styled from '@/components/Trip/TripPlan/TripPlanPostingPlan/TripPlanSelect/TripPlanSelect.styles';

function TripPlanSelect() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<number>();
  const onClickNext = () => {
    if (selectedId !== undefined) {
      // 숫자형태로 전달되면 이동이 안되서, 문자로 강제 변경
      navigate(`${selectedId}`);
    }
  };

  return (
    <Styled.TripPlanSelectWrap>
      <Styled.TripPlanSelectContent>
        <SimpleNav>후기 작성 일정 선택하기</SimpleNav>
        <RetryErrorBoundary>
          <Suspense fallback={<MyPagePlanSkeleton />}>
            <TripPlanSelectList
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
          </Suspense>
        </RetryErrorBoundary>
      </Styled.TripPlanSelectContent>
      <Container>
        <Button
          type="button"
          variants={selectedId ? 'primary' : 'gray'}
          size="lg"
          onClick={onClickNext}
          disabled={Boolean(!selectedId)}>
          후기 작성하러 가기
        </Button>
      </Container>
    </Styled.TripPlanSelectWrap>
  );
}

export default TripPlanSelect;
