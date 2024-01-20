import { useState } from 'react';
import { SlArrowLeft } from 'react-icons/sl';
import { SubTitle } from '@/components/common';
import Container from '@/components/common/Container';
import * as Styled from './TripPlanAddHashtags.styles';
import TripPlanHashtagsList from './TripPlanHashtagsList/TripPlanHashtagsList';

const TripPlanAddHashtags = () => {
  const [selectedHashtags, setSelectedHashtags] = useState<string[]>([]);
  const [isHashtagsModalOpen, setIsHashtagsModalOpen] = useState({
    isPaneOpenLeft: false,
  });

  const handleHashtagsModalSelection = (hashtags: string[] | undefined) => {
    if (hashtags) {
      setSelectedHashtags(hashtags);
    }
    setIsHashtagsModalOpen({ isPaneOpenLeft: false });
  };

  return (
    <Container>
      <SubTitle>어떤 여행이었나요?</SubTitle>
      <Styled.HashtagsInput
        type="text"
        // {...register(`day${selectedDay}.hashtags`)}
        placeholder="해시태그를 선택해 주세요"
        // value={selectedPlace || ''}
        // onChange={(e) => handleChangePlaceName(e.target.value)}
        value={selectedHashtags.join(', ')}
        readOnly
        onClick={() => setIsHashtagsModalOpen({ isPaneOpenLeft: true })}
      />
      <Styled.SlidingPane
        className="citymodal"
        closeIcon={<SlArrowLeft fontSize="15" />}
        isOpen={isHashtagsModalOpen.isPaneOpenLeft}
        onRequestClose={() => {
          setIsHashtagsModalOpen({ isPaneOpenLeft: false });
        }}
        width="22.5rem">
        <TripPlanHashtagsList
          selectedTags={selectedHashtags}
          onHashtagsSelection={handleHashtagsModalSelection}
          onCloseModal={() => setIsHashtagsModalOpen({ isPaneOpenLeft: false })}
        />
      </Styled.SlidingPane>
    </Container>
  );
};

export default TripPlanAddHashtags;
