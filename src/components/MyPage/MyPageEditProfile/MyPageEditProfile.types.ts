export interface EditProfileForm {
  nickname: string;
  description: string;
}

export type MyProfile = EditProfileForm & {
  image?: string;
};

export interface MyPageEditProfileProps {
  handleEditProfile: VoidFunction;
  // setImage: React.Dispatch<React.SetStateAction<string>>;
}
