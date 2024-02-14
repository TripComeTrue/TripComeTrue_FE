import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';
import { ReviewWrite } from '@/components/common';
import { putTripRecordReviewContent } from '@/apis/trip-records';
import useSubmitImages from '@/hooks/common/useSubmitImages';

const Write = () => {
  const navigate = useNavigate();
  const { reviewId } = useParams() as {
    reviewId: string;
    tripRecordId: string;
  };
  const [files, setFiles] = useState<File[]>([]);
  const [content, setContent] = useState('');
  const { handleSubmitImages } = useSubmitImages(files, setFiles);
  const { mutate: putReviewContentsMutate } = useMutation({
    mutationFn: ({
      imageUrl,
      contentValue,
    }: {
      imageUrl: string;
      contentValue: string;
    }) =>
      putTripRecordReviewContent(reviewId, { imageUrl, content: contentValue }),
    onSuccess: () => {
      navigate(-1);
    },
    onError: (error) => {
      if (isAxiosError(error))
        if (error.response?.status === 400 || error.response?.status === 404) {
          toast.error(error.response.data?.errorMessage, {
            position: 'top-center',
            autoClose: 5000,
          });
        }
    },
  });

  const onClickPutReviewContents = async () => {
    const res = await handleSubmitImages();
    putReviewContentsMutate({ imageUrl: res[0], contentValue: content });
  };

  return (
    <ReviewWrite>
      <ReviewWrite.Nav title="리뷰 작성하기" />
      <ReviewWrite.Image setFiles={setFiles} />
      <ReviewWrite.Write content={content} setContent={setContent} />
      <ReviewWrite.WriteButton
        files={files}
        content={content}
        title="리뷰 작성하기"
        onClickFunc={onClickPutReviewContents}
      />
    </ReviewWrite>
  );
};

export default Write;
