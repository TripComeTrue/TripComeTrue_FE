interface ErrorData {
  errorMessage: string;
}

interface Response<T = ErrorData> {
  code: number;
  data: T;
}
