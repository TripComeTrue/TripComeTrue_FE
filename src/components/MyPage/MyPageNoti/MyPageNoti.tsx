import { useQuery } from '@tanstack/react-query';
import MyPageNotiItem from './MyPageNotiItem';
import { getNoties } from '@/apis/mypage';

function MyPageNoti() {
  const { data, isLoading } = useQuery({
    queryKey: ['mypage/noti'],
    queryFn: getNoties,
  });
  if (isLoading) return null;
  return (
    <div>
      {data?.data.map((noti) => <MyPageNotiItem key={noti.id} noti={noti} />)}
    </div>
  );
}

export default MyPageNoti;
