import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { MemberDetail, MemberDetailResBody } from '@/@types/mypage.types';

export interface EditProfileForm {
  nickname: string;
  introduction: string;
}

export type MyProfile = EditProfileForm & {
  image?: string;
};

export interface MyPageEditProfileProps {
  data: MemberDetail;
  refetch: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<MemberDetailResBody, Error>>;
  handleOpen: VoidFunction;
  image?: string;
  setImage: React.Dispatch<React.SetStateAction<string | undefined>>;
}
