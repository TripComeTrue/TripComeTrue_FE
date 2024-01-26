import { useQuery } from '@tanstack/react-query';
import MyPageNotiItem from './MyPageNotiItem';
import { getNoties } from '@/apis/mypage';

function MyPageNoti() {
  const { data, isLoading } = useQuery({
    queryKey: ['member', 'alarms'],
    queryFn: getNoties,
  });
  if (isLoading) return null;
  return (
    <div>
      {data?.data.content.map((noti) => (
        <MyPageNotiItem key={noti.alarmId} noti={noti} />
      ))}
    </div>
  );
}

export default MyPageNoti;
