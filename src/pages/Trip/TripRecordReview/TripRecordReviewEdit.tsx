import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { MouseEvent, useState } from 'react';
import { getTripRecordReview, putTripRecordReview } from '@/apis/trip-records';
import { ReviewWrite } from '@/components/common';
import useDeleteImages from '@/hooks/common/useDeleteImages';
import useSubmitImages from '@/hooks/common/useSubmitImages';

const TripRecordReviewEdit = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]);
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);
  const { reviewId } = useParams() as { reviewId: string };
  const { handleDeleteImages } = useDeleteImages();
  const { handleSubmitImages } = useSubmitImages(files, setFiles);
  const { data: tripRecordReviewData } = useQuery({
    queryKey: ['TripRecordReviewData'],
    queryFn: () => getTripRecordReview(reviewId),
  });

  const onClickRating = (event: MouseEvent<HTMLSpanElement>): void => {
    event.stopPropagation();
    const target = event.target as HTMLSpanElement;
    const ratingScore = Number(target.innerText.split(' ')[0]);

    if (ratingScore) {
      setRating(ratingScore);
    }
  };
  const { mutate: putReviewMutate } = useMutation({
    mutationFn: ({
      imageUrl,
      contentValue,
      ratingScore,
    }: {
      imageUrl: string;
      contentValue: string;
      ratingScore: number;
    }) =>
      putTripRecordReview(reviewId, {
        imageUrl,
        content: contentValue,
        ratingScore,
      }),
    onSuccess: () => {
      navigate(-1);
    },
  });

  const onClickPutReview = async () => {
    if (files.length !== 0) {
      if (tripRecordReviewData?.imageUrl)
        handleDeleteImages([tripRecordReviewData?.imageUrl]);
      const res = await handleSubmitImages();
      putReviewMutate({
        imageUrl: res[0],
        contentValue: content || tripRecordReviewData?.content,
        ratingScore: rating || tripRecordReviewData?.ratingScore,
      });
    } else {
      putReviewMutate({
        imageUrl: tripRecordReviewData?.imageUrl,
        contentValue: content || tripRecordReviewData?.content,
        ratingScore: rating || tripRecordReviewData?.ratingScore,
      });
    }
  };

  return (
    <ReviewWrite>
      <ReviewWrite.Nav title="리뷰 수정하기" />
      <ReviewWrite.Image
        imageUrl={tripRecordReviewData?.imageUrl}
        setFiles={setFiles}
      />
      <ReviewWrite.Write
        defaultValue={tripRecordReviewData?.content}
        content={content}
        setContent={setContent}
      />
      <ReviewWrite.Rating
        myRatingScore={tripRecordReviewData?.ratingScore}
        rating={rating}
        onClickFunc={onClickRating}
      />
      <ReviewWrite.EditButton
        files={files}
        content={content}
        rating={rating}
        title="리뷰 수정하기"
        onClickFunc={onClickPutReview}
      />
    </ReviewWrite>
  );
};

export default TripRecordReviewEdit;
