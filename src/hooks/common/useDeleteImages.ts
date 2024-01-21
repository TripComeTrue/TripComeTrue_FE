import { deleteImages } from '@/apis/images';

const useDeleteImages = () => {
  const handleDeleteImages = (imagesUrl: string[]) => {
    imagesUrl.map((imageUrl: string) => {
      const formData = new FormData();
      formData.append('imageUrl', imageUrl);

      return deleteImages(formData);
    });
  };

  return { handleDeleteImages };
};

export default useDeleteImages;
