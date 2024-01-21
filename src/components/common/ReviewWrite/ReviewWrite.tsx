import { ChangeEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { Bubble, Button, SimpleNav, SubTitle, Text } from '@/components/common';
import * as Styled from './ReviewWrite.styles';
import CameraIcon from '/images/camera.svg';
import { ReviewWriteProps } from './ReviewWrite.types';
import useSubmitImages from '@/hooks/common/useSubmitImages';
import { postPlaceReview, putPlaceReview } from '@/apis/place';
import useDeleteImages from '@/hooks/common/useDeleteImages';

const ReviewWrite = ({ isEdit, spotName, variant }: ReviewWriteProps) => {
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]);
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState('');
  const { placeId } = useParams() as { placeId: string };

  const { handleSubmitImages } = useSubmitImages(files, setFiles);
  const { handleDeleteImages } = useDeleteImages();
  const { mutate: postReviewMutate } = useMutation({
    mutationFn: ({
      imageUrl,
      contentValue,
    }: {
      imageUrl: string;
      contentValue: string;
    }) => postPlaceReview(placeId, { imageUrl, content: contentValue }),
  });
  // const { mutate: putReviewMutate } = useMutation({
  //   mutationFn: (placeReviewId, {}) =>
  //     putPlaceReview(placeReviewId, { imageUrl, content }),
  // });

  // 리뷰 작성하기 함수
  const onClickPostReview = async () => {
    const res = await handleSubmitImages();
    postReviewMutate({ imageUrl: res[0], contentValue: content });
    navigate(`/detailfeed/spot/${placeId}/review`);
  };

  // 리뷰 수정하기 함수
  // const onClickPutReview = async () => {
  //   await handleDeleteImages();
  // };

  // 이미지 미리보기 함수
  const previewImage = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files !== null) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      setFiles([file]);

      reader.onload = () => {
        const result = reader.result as string;
        setImageFile(result);
      };
    }
  };

  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContent(event.target.value);
  };

  return (
    <div>
      <SimpleNav>{spotName || '여정 리뷰하기'}</SimpleNav>
      <Styled.ImageContainer htmlFor="input-file">
        {imageFile ? (
          <Styled.PreviewImage src={imageFile} />
        ) : (
          <Styled.UploadContainer>
            <Styled.ImageUploadPoint>
              <Bubble>+ 1P</Bubble>
            </Styled.ImageUploadPoint>
            <Styled.UploadImage src={CameraIcon} />
            <Text color="gray" fontWeight={700}>
              사진 업로드
            </Text>
          </Styled.UploadContainer>
        )}
        <Styled.UploadInput
          type="file"
          id="input-file"
          onChange={previewImage}
        />
      </Styled.ImageContainer>
      <Styled.WriteContainer>
        <Styled.WritePoint>
          <Bubble>+ 1P</Bubble>
        </Styled.WritePoint>
        <SubTitle fontSize={14}>
          여행 후기에 대해 남기고 싶은 말을 남겨주세요
        </SubTitle>
        <Styled.TextArea
          maxLength={2000}
          cols={3}
          placeholder="여행 후기를 참고한 경험을 솔직하게 남겨주세요"
          value={content}
          onChange={onChangeContent}
        />
        <Styled.TextCountWrapper>
          <Text color="primary" fontSize={10}>
            {content.length}
          </Text>
          <Text color="gray" fontSize={10}>
            &nbsp;/&nbsp;2000
          </Text>
        </Styled.TextCountWrapper>
      </Styled.WriteContainer>

      {variant === 'trip' && isEdit && (
        <Styled.RatingContainer>
          <Styled.RatingCustom
            name="half-rating"
            defaultValue={0}
            precision={0.5}
          />
        </Styled.RatingContainer>
      )}

      <Styled.ButtonWrapper>
        <Button
          variants="primary"
          size="lg"
          disabled={content.length < 10}
          onClick={onClickPostReview}>
          리뷰 {!isEdit ? '작성' : '수정'}하기
        </Button>
      </Styled.ButtonWrapper>
    </div>
  );
};

export default ReviewWrite;
