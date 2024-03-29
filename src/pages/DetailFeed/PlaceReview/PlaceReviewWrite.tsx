import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isAxiosError } from 'axios';
import { ReviewWrite } from '@/components/common';
import { postPlaceReview } from '@/apis/place';
import useSubmitImages from '@/hooks/common/useSubmitImages';

const PlaceReviewWrite = () => {
  const navigate = useNavigate();
  const { placeId } = useParams() as { placeId: string };
  const [files, setFiles] = useState<File[]>([]);
  const [content, setContent] = useState('');
  const { handleSubmitImages } = useSubmitImages(files, setFiles);
  const { mutate: postReviewMutate } = useMutation({
    mutationFn: ({
      imageUrl,
      contentValue,
    }: {
      imageUrl: string;
      contentValue: string;
    }) => {
      return postPlaceReview(placeId, {
        imageUrl,
        content: contentValue,
      });
    },
    onSuccess: () => navigate(`/detailfeed/spot/${placeId}/review`),
    onError: (error) => {
      if (isAxiosError(error))
        if (error.response?.status === 409) {
          toast.error(error.response.data?.errorMessage, {
            position: 'top-center',
            autoClose: 5000,
          });
        } else if (error.response?.status === 400) {
          toast.error(error.response.data?.errorMessage, {
            position: 'top-center',
            autoClose: 5000,
          });
        }
    },
  });

  const onClickPostReview = async () => {
    const res = await handleSubmitImages();
    postReviewMutate({ imageUrl: res[0], contentValue: content });
  };

  return (
    <ReviewWrite>
      <ReviewWrite.Nav title="리뷰 작성하기" />
      <ReviewWrite.Image setFiles={setFiles} />
      <ReviewWrite.Write content={content} setContent={setContent} />
      <ReviewWrite.WriteButton
        content={content}
        title="리뷰 작성하기"
        onClickFunc={onClickPostReview}
      />
    </ReviewWrite>
  );
};

export default PlaceReviewWrite;
