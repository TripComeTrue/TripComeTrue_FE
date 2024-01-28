import React, { useRef, useState, useEffect } from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import * as Styled from './TripPlanUploadMainImages.styles';
import deleteIcon from '/images/delete.svg';
import { SubTitle } from '@/components/common';
import useSubmitImages from '@/hooks/common/useSubmitImages';
import useDeleteImages from '@/hooks/common/useDeleteImages';

type TripPlanUploadMainImagesProps = {
  onImagesChange: (imageUrls: string[]) => void;
  onValidationChange: (isValid: boolean) => void;
};

const TripPlanUploadMainImages: React.FC<TripPlanUploadMainImagesProps> = ({
  onImagesChange,
  onValidationChange,
}) => {
  const [isAtLeastOneImage, setIsAtLeastOneImage] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const { handleSubmitImages } = useSubmitImages(files, setFiles);
  const { handleDeleteImages } = useDeleteImages();
  const UploadImageIconRef = useRef<HTMLInputElement>(null);

  const handleUploadImage = (event: React.MouseEvent) => {
    event.preventDefault();
    UploadImageIconRef.current?.click();
  };

  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setFiles((prev) => [...prev, file]);
      const fileUrl = URL.createObjectURL(file);
      setUploadedImages((prev) => [...prev, fileUrl]);
      setIsAtLeastOneImage(uploadedImages.length + 1 >= 1);
    }
  };

  const handleRemoveImage = async (imageIndex: number) => {
    const imageToDelete = uploadedImages[imageIndex];

    const newFiles = files.filter((_, index) => index !== imageIndex);
    const newImageUrls = uploadedImages.filter(
      (_, index) => index !== imageIndex,
    );
    setFiles(newFiles);
    setUploadedImages(newImageUrls);

    setIsAtLeastOneImage(newImageUrls.length >= 1);

    try {
      await handleDeleteImages([imageToDelete]);
      console.log(imageToDelete);
    } catch (error) {
      console.error('이미지 업로드 중 에러가 발생했습니다', error);
    }
  };

  useEffect(() => {
    const uploadImages = async () => {
      if (files.length > 0) {
        try {
          const urls = await handleSubmitImages();
          setUploadedImages(urls);
          onImagesChange(urls);
          setIsAtLeastOneImage(urls.length >= 1);
          console.log(urls);
        } catch (error) {
          console.error('이미지 업로드 중 에러가 발생했습니다', error);
        }
      }
    };
    uploadImages();
  }, [files, handleSubmitImages, onImagesChange]);

  useEffect(() => {
    onValidationChange(isAtLeastOneImage);
  }, [isAtLeastOneImage, onValidationChange]);

  return (
    <Styled.Wrapper>
      <SubTitle fontSize={15}>
        내 여행의 대표 이미지 <span style={{ color: 'red' }}>*</span>
      </SubTitle>
      <Styled.UploadImageContainer>
        <Styled.UploadImageIcon onClick={handleUploadImage}>
          <AddAPhotoIcon className="image-icon" />
          <p className="photo-text">
            사진 업로드
            <br />({uploadedImages.length}/3)
          </p>
        </Styled.UploadImageIcon>

        <Styled.ImageInput
          ref={UploadImageIconRef}
          type="file"
          accept="image/*"
          name="file"
          onChange={handleChangeImage}
          disabled={uploadedImages.length >= 3}
        />

        <Styled.UploadedImageSwiper
          spaceBetween={1}
          slidesPerView={uploadedImages.length > 1 ? 1.5 : 1}
          direction="horizontal"
          scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
          {uploadedImages.map((image, index) => (
            <Styled.UploadedImage key={image}>
              <img src={image} alt={`Uploaded ${index + 1}`} />
              <Styled.RemoveBtn onClick={() => handleRemoveImage(index)}>
                <img src={deleteIcon} alt="delete-icon" />
              </Styled.RemoveBtn>
            </Styled.UploadedImage>
          ))}
        </Styled.UploadedImageSwiper>
      </Styled.UploadImageContainer>
      {!isAtLeastOneImage && (
        <p className="warning">* 최소 1장 이상의 이미지를 등록해주세요.</p>
      )}
    </Styled.Wrapper>
  );
};

export default TripPlanUploadMainImages;
