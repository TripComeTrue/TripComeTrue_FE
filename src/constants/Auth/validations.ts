export const emailValidation = {
  required: '이메일은 필수 입니다.',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: '올바른 이메일을 입력해주세요',
  },
};

export const passwordValiation = {
  required: '비밀번호를 입력해주세요',
  pattern: {
    value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/,
    message:
      '공백을 제외한 영문 + 숫자 + 특수문자 8~20자 조합으로 입력해주세요',
  },
  minLength: { value: 8, message: '8자 이상 입력해주세요' },
  maxLength: { value: 20, message: '20자 이하로 입력해주세요' },
};
