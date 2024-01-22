import { ChangeEvent, useState } from 'react';
import { Bubble, Button, SimpleNav, SubTitle, Text } from '@/components/common';
import * as Styled from './ReviewWrite.styles';
import CameraIcon from '/images/camera.svg';
import { ReviewWriteProps } from './ReviewWrite.types';

const ReviewWrite = ({ isEdit, spotName, variant }: ReviewWriteProps) => {
  const [imageFile, setImageFile] = useState('');

  const previewImage = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files !== null) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const result = reader.result as string;
        setImageFile(result);
      };
    }
  };

  console.log(isEdit);
  console.log(variant);

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
        />
        <Styled.TextCountWrapper>
          <Text color="primary" fontSize={10}>
            0
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
        <Button variants="primary" size="lg" disabled>
          리뷰 {isEdit === false ? '작성' : '수정'}하기
        </Button>
      </Styled.ButtonWrapper>
    </div>
  );
};

export default ReviewWrite;
