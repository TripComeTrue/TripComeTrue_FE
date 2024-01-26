import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import client from '@/apis/client';

const getCityData = async <T>(url: string) => {
  const { data } = await client.get<T>(url);
  return data;
};
// eslint-disable-next-line import/prefer-default-export
export const useDetailFeedQuery = <T>({
  queryKey,
  id,
  fnUrl,
}: {
  queryKey: string;
  id: number;
  fnUrl: string;
}) => {
  const { data, isError, isLoading, isSuccess } = useQuery<
    T,
    AxiosError,
    T,
    [string, number, string]
  >({
    queryKey: [queryKey, id, fnUrl],
    queryFn: () => getCityData<T>(fnUrl),
    staleTime: 600000,
  });

  return { data, isError, isLoading, isSuccess };
};