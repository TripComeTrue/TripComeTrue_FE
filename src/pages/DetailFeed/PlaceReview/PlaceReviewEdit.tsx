import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewWrite } from '@/components/common';
import { getPlaceReview, putPlaceReview } from '@/apis/place';
import useDeleteImages from '@/hooks/common/useDeleteImages';
import useSubmitImages from '@/hooks/common/useSubmitImages';

const PlaceReviewEdit = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [content, setContent] = useState('');
  const { placeReviewId } = useParams() as { placeReviewId: string };
  const { handleDeleteImages } = useDeleteImages();
  const { handleSubmitImages } = useSubmitImages(files, setFiles);
  const { data: placeReviewData } = useQuery({
    queryKey: ['PlaceReviewData'],
    queryFn: () => getPlaceReview(placeReviewId),
  });

  const { mutate: putReviewMutate } = useMutation({
    mutationFn: ({
      imageUrl,
      contentValue,
    }: {
      imageUrl: string;
      contentValue: string;
    }) => putPlaceReview(placeReviewId, { imageUrl, content: contentValue }),
  });

  // 리뷰 수정하기 함수
  const onClickPutReview = async () => {
    if (files.length !== 0) {
      if (placeReviewData?.imageUrl)
        handleDeleteImages([placeReviewData?.imageUrl]);

      const res = await handleSubmitImages();
      putReviewMutate({
        imageUrl: res[0],
        contentValue: content || placeReviewData?.content,
      });
    } else {
      putReviewMutate({
        imageUrl: placeReviewData?.imageUrl,
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
