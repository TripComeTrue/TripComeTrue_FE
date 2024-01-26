import { Pagination } from 'swiper/modules';
import * as Styled from './MainCarousel.styles';
import 'swiper/css';
import 'swiper/css/pagination';
import { Tag } from '@/components/common';
import { MainCarouselProps } from './MainCarousel.types';
import classifyTag from '@/utils/classifyTag';

const MainCarousel = ({ imagesData }: MainCarouselProps) => {
  return (
    <Styled.Container
      pagination={{ dynamicBullets: true }}
      modules={[Pagination]}>
      {imagesData?.map((data) => (
        <Styled.Slide key={data.id}>
          <Styled.Image src={data.imageUrl} />
          {data.tagType && (
            <Styled.TagWrapper>
              <Tag
                fontSize={8}
                color="primary"
                bgColor="white"
                size="sm"
                src={data.tagUrl}>
                {classifyTag(data.tagType)}
              </Tag>
            </Styled.TagWrapper>
          )}
        </Styled.Slide>
      ))}
    </Styled.Container>
  );
};

export default MainCarousel;
