import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ReviewWrite } from '@/components/common';
import { getPlaceReview, putPlaceReview } from '@/apis/place';
import useDeleteImages from '@/hooks/common/useDeleteImages';
import useSubmitImages from '@/hooks/common/useSubmitImages';

const PlaceReviewEdit = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]);
  const [content, setContent] = useState('');
  const { placeId, reviewId } = useParams() as {
    placeId: string;
    reviewId: string;
  };
  const { handleDeleteImages } = useDeleteImages();
  const { handleSubmitImages } = useSubmitImages(files, setFiles);
  const { data: placeReviewData } = useQuery({
    queryKey: ['PlaceReviewData'],
    queryFn: () => getPlaceReview(reviewId),
  });

  const { mutate: putReviewMutate } = useMutation({
    mutationFn: ({
      imageUrl,
      contentValue,
    }: {
      imageUrl: string;
      contentValue: string;
    }) => putPlaceReview(reviewId, { imageUrl, content: contentValue }),
    onSuccess: () => {
      navigate(`/detailfeed/spot/${placeId}/review`);
    },
    onError: (error) => {
      if (axios.isAxiosError(error))
        if (error.response?.status === 400 || error.response?.status === 404) {
          toast.error(error.response.data?.errorMessage, {
            position: 'top-center',
            autoClose: 5000,
          });
        }
    },
  });

  // 리뷰 수정하기 함수
  const onClickPutReview = async () => {
    if (files.length !== 0) {
      if (placeReviewData?.imageUrl)
        handleDeleteImages([placeReviewData?.imageUrl]);

      const res = await handleSubmitImages();
      putReviewMutate({
        imageUrl: res[0],
        contentValue: content || (placeReviewData?.content as string),
      });
    } else {
      putReviewMutate({
        imageUrl: placeReviewData?.imageUrl as string,
        contentValue: content,
      });
    }
  };

  return (
    <ReviewWrite>
      <ReviewWrite.Nav title="리뷰 수정하기" />
      <ReviewWrite.Image
        imageUrl={placeReviewData?.imageUrl}
        setFiles={setFiles}
      />
      <ReviewWrite.Write
        defaultValue={placeReviewData?.content}
        content={content}
        setContent={setContent}
      />
      <ReviewWrite.EditButton
        files={files}
        content={content}
        title="리뷰 수정하기"
        onClickFunc={onClickPutReview}
      />
    </ReviewWrite>
  );
};

export default PlaceReviewEdit;
