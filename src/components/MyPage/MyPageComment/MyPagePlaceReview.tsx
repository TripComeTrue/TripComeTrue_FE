import { useNavigate } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getMyPlaceReview } from '@/apis/mypage';
import { PlaceReviewCard } from '@/components/common';

function MyPagePlaceReview() {
  const navigate = useNavigate();
  const { data } = useSuspenseQuery({
    queryKey: ['mypage/place'],
    queryFn: getMyPlaceReview,
  });

  return (
    <div>
      {data.data.map((item) => (
        <PlaceReviewCard key={item.id}>
          <PlaceReviewCard.MyPageHeader
            nickname="룰루랄라"
            profileUrl="/busan.jpeg"
            writeDate={item.dates}>
            <PlaceReviewCard.MyPageHeader.ActionsModal
              onClickModify={() =>
                navigate(
                  `/detailfeed/spot/${item.spotId}/review/${item.id}/edit`,
                )
              }
              onClickDelete={() => {}}
            />
          </PlaceReviewCard.MyPageHeader>
          <PlaceReviewCard.Main
            imageUrl={item.postImg ?? ''}
            content={item.text}
          />
          <PlaceReviewCard.InteractionButtons
            likeCount={item.likes}
            commentCount={item.comments}
          />
        </PlaceReviewCard>
      ))}
    </div>
  );
}

export default MyPagePlaceReview;
