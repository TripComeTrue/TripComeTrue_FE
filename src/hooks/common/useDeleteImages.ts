import { deleteImages } from '@/apis/images';

const useDeleteImages = () => {
  const handleDeleteImages = (imagesUrl: string[]) => {
    try {
      imagesUrl.map((imageUrl: string) => {
        const formData = new FormData();
        formData.append('imageUrl', imageUrl);

        return deleteImages(formData);
      });
    } catch (error) {
      console.error('Error delete images:', error);

      throw error;
    }
  };

  return { handleDeleteImages };
};

export default useDeleteImages;
