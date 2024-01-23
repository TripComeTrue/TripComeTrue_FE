interface MyPageEditImageProps {
  image?: string;
  newImage?: string;
  setImage: React.Dispatch<React.SetStateAction<string | undefined>>;
  handleEditProfile: VoidFunction;
}
