import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteWishList } from '@/apis/mypage';

export const useWishDeleteMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteWishList,
    // When mutate is called:
    onMutate: async (newTodo) => {
      // refetch 취소
      await queryClient.cancelQueries({ queryKey: ['wishlist', newTodo.type] });

      // 현재 쿼리 데이터를 캐시에서 가져옴
      const prevData = queryClient.getQueryData(['wishlist', newTodo.type]);
      // console.log(prevData);

      // Optimistically update to the new value
      queryClient.setQueryData(['wishlist', newTodo.type], (oldData: any) => {
        // oldData에서 deletedItemId를 가지고 있는 요소를 삭제
        const updatedData = {
          ...oldData,
          data: {
            content: oldData.data.content.filter(
              (item: any) => item.id !== newTodo.id,
            ),
          },
        };
        return updatedData;
      });

      // Return a context with the previous and new todo
      return { prevData };
    },
    // If the mutation fails, use the context we returned above
    onError: (_, req, context) => {
      queryClient.setQueryData(['wishlist', req.type], context?.prevData);
    },
    // Always refetch after error or success:
    onSettled: (newTodo) => {
      queryClient.invalidateQueries({ queryKey: ['wishlist', newTodo?.type] });
    },
  });
  return mutation;
};
