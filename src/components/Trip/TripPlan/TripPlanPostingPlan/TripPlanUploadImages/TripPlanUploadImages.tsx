import { useEffect, useRef, useState } from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import * as Styled from './TripPlanUploadImages.styles';
import deleteIcon from '/images/delete.svg';
import useSubmitImages from '@/hooks/common/useSubmitImages';
import useDeleteImages from '@/hooks/common/useDeleteImages';

type TripPlanUploadImagesProps = {
  selectedDay: number;
  placeIndex: number;
  onImagesChange: (imageUrls: string[], placeIndex: number) => void;
  uploadedImages: string[];
};

const TripPlanUploadImages: React.FC<TripPlanUploadImagesProps> = ({
  // selectedDay, // 추후 사용 가능
  placeIndex,
  onImagesChange,
  uploadedImages,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadedImagesState, setUploadedImagesState] =
    useState<string[]>(uploadedImages);
  const { handleSubmitImages } = useSubmitImages(files, setFiles);
  const { handleDeleteImages } = useDeleteImages();
  const UploadImageIconRef = useRef<HTMLInputElement>(null);

  const handleUploadImage = (event: React.MouseEvent) => {
    event.preventDefault();
    UploadImageIconRef.current?.click();
  };

  const handleChangeImage = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setFiles((prev) => [...prev, file]);
      console.log(files);

      try {
        const urls = await handleSubmitImages();
        const updatedUrls = [...uploadedImagesState, ...urls];
        setUploadedImagesState(updatedUrls);

        console.log(uploadedImagesState);
        onImagesChange(updatedUrls, placeIndex);
      } catch (error) {
        console.error('Error uploading images:', error);
      }
    }
  };

  const handleRemoveImage = async (imageIndex: number) => {
    const imageToDelete = uploadedImagesState[imageIndex];
    const newFiles = files.filter((_, index) => index !== imageIndex);
    const newImageUrls = uploadedImagesState.filter(
      (_, index) => index !== imageIndex,
    );

    setFiles(newFiles);
    setUploadedImagesState(newImageUrls);

    try {
      await handleDeleteImages([imageToDelete]);
      onImagesChange(newImageUrls, placeIndex);
    } catch (error) {
      console.error('Error deleting images:', error);
    }
  };

  useEffect(() => {
    setUploadedImagesState(uploadedImages);
  }, [uploadedImages]);

  useEffect(() => {
    const uploadImages = async () => {
      if (files.length > 0) {
        try {
          const newUploadedUrls = await handleSubmitImages();
          const updatedUrls = [...uploadedImages, ...newUploadedUrls];
          setUploadedImagesState(updatedUrls);
          onImagesChange(updatedUrls, placeIndex);
          console.log(updatedUrls);
        } catch (error) {
          console.error('Error uploading images:', error);
        }
      }
    };
    uploadImages();
  }, [files, handleSubmitImages, onImagesChange, uploadedImagesState]);

  return (
    <Styled.Wrapper>
      <Styled.UploadImageContainer>
        <Styled.UploadImageIcon onClick={handleUploadImage}>
          <AddAPhotoIcon className="image-icon" />
          <p className="photo-text">
            사진 업로드
            <br />({uploadedImagesState.length}/5)
          </p>
        </Styled.UploadImageIcon>

        <Styled.ImageInput
          ref={UploadImageIconRef}
          type="file"
          accept="image/*"
          name="file"
          onChange={handleChangeImage}
          disabled={uploadedImagesState.length >= 5}
        />

        <Styled.UploadedImageSwiper
          spaceBetween={1}
          slidesPerView={uploadedImagesState.length > 1 ? 1.5 : 1}
          direction="horizontal"
          scrollbar={{
            draggable: true,
            el: '.swiper-scrollbar',
            hide: false,
          }}>
          {uploadedImagesState.map((image, index) => (
            <Styled.UploadedImage key={`${image}-${index}`}>
              <img src={image} alt={`Uploaded ${index + 1}`} />
              <Styled.RemoveBtn onClick={() => handleRemoveImage(index)}>
                <img src={deleteIcon} alt="Delete icon" />
              </Styled.RemoveBtn>
            </Styled.UploadedImage>
          ))}
        </Styled.UploadedImageSwiper>
      </Styled.UploadImageContainer>
    </Styled.Wrapper>
  );
};

export default TripPlanUploadImages;
