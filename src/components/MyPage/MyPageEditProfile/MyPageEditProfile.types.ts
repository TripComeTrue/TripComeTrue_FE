export interface EditProfileForm {
  nickname: string;
  introduction: string;
}

export type MyProfile = EditProfileForm & {
  image?: string;
};

export interface MyPageEditProfileProps {
  handleEditProfile: VoidFunction;
  image?: string;
  setImage: React.Dispatch<React.SetStateAction<string | undefined>>;
}
