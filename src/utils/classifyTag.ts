const classifyTag = (tagType: string) => {
  switch (tagType) {
    case 'AIRLINE_TICKET_PURCHASE':
      return '해당 후기의 항공권 보러가기';
    case 'ACCOMMODATION_RESERVATION':
      return '해당 후기의 숙박시설 보러가기';
    case 'FOOD_TOURISM_LOCATION':
      return '해당 후기의 여행지 보러가기';
    case 'TICKET_PASS_PURCHASE':
      return '해당 후기의 티켓 보러가기';
    default:
      return null;
  }
};

export default classifyTag;
