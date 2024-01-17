export interface SignUpFormData {
  email?: string;
  password?: string;
  passwordCheck?: string;
}

export interface SignUpFormProps {
  handleOpen: () => void;
  setErrorMsg: (value: string) => void;
}
