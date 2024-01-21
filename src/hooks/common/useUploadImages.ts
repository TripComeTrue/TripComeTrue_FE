import { ChangeEvent, Dispatch, SetStateAction } from 'react';

const useUploadImages = (setFiles: Dispatch<SetStateAction<File[]>>) => {
  const handleUploadImages = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    const fileList = target.files;

    if (fileList) {
      for (const value of fileList) {
        setFiles((prev: File[]) => [...prev, value]);
      }
    }
  };

  return { handleUploadImages };
};

export default useUploadImages;
