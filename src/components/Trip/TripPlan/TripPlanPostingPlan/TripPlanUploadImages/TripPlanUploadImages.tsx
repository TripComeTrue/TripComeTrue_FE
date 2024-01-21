import { useRef, useState } from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import * as Styled from './TripPlanUploadImages.styles';
import deleteIcon from '/public/images/delete.svg';
import { UploadImagesProps } from './TripPlanUploadImages.types';

const TripPlanUploadImages: React.FC<UploadImagesProps> = ({
  setFormData,
  selectedDay,
}) => {
  const UploadImageIconRef = useRef<HTMLInputElement>(null);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleUploadImage = (event: React.MouseEvent) => {
    event.preventDefault();
    UploadImageIconRef.current?.click();
  };

  const handleChangeImage = async (
    event: React.ChangeEvent<HTMLInputElement>,
    day: number,
  ) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setUploadedImages((prevImages) => [...prevImages, fileUrl]);

      setFormData((prevFormData) => {
        const newFormData = [...prevFormData];
        const firstPlace = newFormData[day].places[0];
        newFormData[day].places[0] = { ...firstPlace, photo: fileUrl };
        return newFormData;
      });
    }
  };

  const handleRemoveImage = (imageNumber: number) => {
    setUploadedImages((currentImages) =>
      currentImages.filter((_, index) => index !== imageNumber),
    );
  };

  return (
    <Styled.UploadImageContainer>
      <Styled.UploadImageIcon onClick={handleUploadImage}>
        <AddAPhotoIcon className="image-icon" />
        <p className="photo-text">
          사진 업로드
          <br />({uploadedImages.length}/5)
        </p>
      </Styled.UploadImageIcon>

      <Styled.ImageInput
        ref={UploadImageIconRef}
        type="file"
        accept="image/*"
        name="file"
        onChange={(event) =>
          selectedDay !== undefined &&
          selectedDay !== null &&
          handleChangeImage(event, selectedDay - 1)
        }
        disabled={uploadedImages.length >= 5}
      />

      <Styled.UploadedImageSwiper
        spaceBetween={1}
        slidesPerView={uploadedImages.length > 1 ? 1.5 : 1}
        direction="horizontal"
        scrollbar={{
          draggable: true,
          el: '.swiper-scrollbar',
          hide: false,
        }}>
        {uploadedImages.map((image, number) => (
          <Styled.UploadedImage key={image}>
            <img src={image} alt={`Uploaded ${number + 1}`} />
            <Styled.RemoveBtn onClick={() => handleRemoveImage(number)}>
              <img src={deleteIcon} alt="delete-icon" />
            </Styled.RemoveBtn>
          </Styled.UploadedImage>
        ))}
      </Styled.UploadedImageSwiper>
    </Styled.UploadImageContainer>
  );
};

export default TripPlanUploadImages;
