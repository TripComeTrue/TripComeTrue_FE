export interface EditProfileForm {
  nickname: string;
  description: string;
}

export type MyProfile = EditProfileForm & {
  image?: string;
};
