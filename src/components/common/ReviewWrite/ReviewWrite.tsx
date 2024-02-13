import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { Bubble, Button, SimpleNav, SubTitle, Text } from '@/components/common';
import * as Styled from './ReviewWrite.styles';
import CameraIcon from '/images/camera.svg';
import { ReviewWriteProps } from './ReviewWrite.types';

const ReviewWrite = ({ children }: ReviewWriteProps) => {
  return <div>{children}</div>;
};

export default ReviewWrite;

const Nav = ({ title }: { title: string }) => {
  return <SimpleNav>{title}</SimpleNav>;
};

const Image = ({
  imageUrl,
  setFiles,
}: {
  imageUrl?: string;
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}) => {
  const [previewImage, setPreviewImage] = useState('');
  // 이미지 미리보기 함수
  const handlePreviewImage = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files !== null) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      setFiles([file]);

      reader.onload = () => {
        const result = reader.result as string;
        setPreviewImage(result);
      };
    }
  };

  useEffect(() => {
    if (imageUrl) {
      setPreviewImage(imageUrl);
    }
  }, [imageUrl]);

  return (
    <Styled.ImageContainer htmlFor="input-file">
      {previewImage ? (
        <Styled.PreviewImage src={previewImage} />
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
        onChange={handlePreviewImage}
      />
    </Styled.ImageContainer>
  );
};

const Write = ({
  defaultValue,
  content,
  setContent,
}: {
  defaultValue?: string;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContent(event.target.value);
  };
  return (
    <Styled.WriteContainer>
      <Styled.WritePoint>
        <Bubble>+ 1P</Bubble>
      </Styled.WritePoint>
      <SubTitle fontSize={14}>
        여행 후기에 대해 남기고 싶은 말을 남겨주세요
      </SubTitle>
      <Styled.TextArea
        maxLength={500}
        cols={3}
        placeholder="여행 후기를 참고한 경험을 솔직하게 남겨주세요"
        defaultValue={defaultValue}
        onChange={onChangeContent}
      />
      <Styled.TextCountWrapper>
        <Text color="primary" fontSize={10}>
          {defaultValue ? defaultValue.length : content?.length}
        </Text>
        <Text color="gray" fontSize={10}>
          &nbsp;/&nbsp;500
        </Text>
      </Styled.TextCountWrapper>
    </Styled.WriteContainer>
  );
};

const Rating = ({
  myRatingScore,
  rating,
  onClickFunc,
}: {
  myRatingScore: number;
  rating: number;
  onClickFunc: (event: MouseEvent<HTMLSpanElement>) => void;
}) => {
  return (
    <Styled.RatingContainer>
      <Styled.RatingCustom
        onClick={onClickFunc}
        name="half-rating"
        value={rating || myRatingScore || 0}
        precision={0.5}
      />
    </Styled.RatingContainer>
  );
};

const WriteButton = ({
  files,
  content,
  title,
  onClickFunc,
}: {
  files?: File[];
  content: string;
  title: string;
  onClickFunc: () => void;
}) => {
  return (
    <Styled.ButtonWrapper>
      <Button
        variants="primary"
        size="lg"
        disabled={
          files
            ? !(files.length !== 0 && content?.length >= 10)
            : content?.length < 10
        }
        onClick={onClickFunc}>
        {title}
      </Button>
    </Styled.ButtonWrapper>
  );
};

const EditButton = ({
  files,
  content,
  title,
  rating,
  onClickFunc,
}: {
  files: File[];
  content: string;
  title: string;
  rating?: number;
  onClickFunc: () => void;
}) => {
  return (
    <Styled.ButtonWrapper>
      <Button
        variants="primary"
        size="lg"
        disabled={!(files.length !== 0 || content.length !== 0 || rating)}
        onClick={onClickFunc}>
        {title}
      </Button>
    </Styled.ButtonWrapper>
  );
};

ReviewWrite.Nav = Nav;
ReviewWrite.Image = Image;
ReviewWrite.Write = Write;
ReviewWrite.Rating = Rating;
ReviewWrite.WriteButton = WriteButton;
ReviewWrite.EditButton = EditButton;
