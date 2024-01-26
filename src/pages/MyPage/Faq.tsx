import { SimpleNav } from '@/components/common';
import { MyPageAccordion } from '@/components/MyPage';
import MyPageContainer from '@/components/MyPage/MyPageLayout/MyPageLayout.styles';
import FAQ_ITEM from '@/constants/MyPage/faq';

function Faq() {
  return (
    <>
      <SimpleNav>고객센터</SimpleNav>
      <MyPageContainer>
        {FAQ_ITEM.map((item) => (
          <MyPageAccordion key={item.id} item={item} />
        ))}
      </MyPageContainer>
    </>
  );
}

export default Faq;
