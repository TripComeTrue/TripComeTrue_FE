import { Dispatch, SetStateAction } from 'react';
import { postImages } from '@/apis/images';

const useSubmitImages = (
  files: File[],
  setFiles: Dispatch<SetStateAction<File[]>>,
) => {
  const handleSubmitImages = async () => {
    try {
      const res = await Promise.all(
        files.map((file: File) => {
          const formData = new FormData();
          formData.append('file', file);

          return postImages(formData);
        }),
      );

      const urls = res.map((response) => response.imageUrl);
      setFiles([]);

      return urls;
    } catch (error) {
      console.error('Error submitting images:', error);

      throw error;
    }
  };

  return { handleSubmitImages };
};

export default useSubmitImages;
