import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

const dateToString = (date: Date | null) => {
  if (date) {
    return format(date, 'yyyy.MM.dd', { locale: ko });
  }
  return '';
};

export default dateToString;
