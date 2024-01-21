import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { postImages } from '@/apis/images';

const useSubmitImages = (
  files: File[],
  setFiles: Dispatch<SetStateAction<File[]>>,
) => {
  const [imagesUrl, setImagesUrl] = useState<File[]>([]);

  const handleSubmitImages = async (event: FormEvent) => {
    event.preventDefault();
    const res = files.map((file: File) => {
      const formData = new FormData();
      formData.append('file', file);

      return postImages(formData);
    });

    const promiseAll = await Promise.all(res);
    setFiles([]);
    setImagesUrl(promiseAll);
  };

  return { handleSubmitImages, imagesUrl };
};

export default useSubmitImages;
