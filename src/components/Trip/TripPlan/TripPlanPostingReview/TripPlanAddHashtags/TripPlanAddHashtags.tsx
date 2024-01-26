import { useState } from 'react';
import { SlArrowLeft } from 'react-icons/sl';
import { IoCloseCircle } from 'react-icons/io5';
import { SubTitle } from '@/components/common';
import * as Styled from './TripPlanAddHashtags.styles';
import TripPlanHashtagsList from './TripPlanHashtagsList/TripPlanHashtagsList';
import { TripPlanAddHashtagsProps } from './TripPlanAddHashtags.types';

const TripPlanAddHashtags = ({
  selectedHashtags,
  setSelectedHashtags,
}: TripPlanAddHashtagsProps) => {
  // const [selectedHashtags, setSelectedHashtags] = useState<string[]>([]);
  const [isHashtagsModalOpen, setIsHashtagsModalOpen] = useState({
    isPaneOpenLeft: false,
  });

  const handleSelectHashtag = (hashtag: string) => {
    if (selectedHashtags.includes(hashtag)) {
      setSelectedHashtags(selectedHashtags.filter((hash) => hash !== hashtag));
    } else {
      setSelectedHashtags([...selectedHashtags, hashtag]);
    }
  };

  const handleRemoveHashtag = (event: React.MouseEvent, hashtag: string) => {
    event.stopPropagation();

    if (selectedHashtags.includes(hashtag)) {
      setSelectedHashtags(selectedHashtags.filter((hash) => hash !== hashtag));
    }
    return [...selectedHashtags, hashtag];
  };

  return (
    <div>
      <SubTitle fontSize={17}>어떤 여행이었나요?</SubTitle>
      <Styled.HashtagsDisplay
        onClick={() => setIsHashtagsModalOpen({ isPaneOpenLeft: true })}>
        {selectedHashtags.map((tag) => (
          <Styled.Hashtag key={tag}>
            &#35;{tag}
            <Styled.RemoveBtn
              onClick={(event) => handleRemoveHashtag(event, tag)}>
              <IoCloseCircle color="#626161" />
            </Styled.RemoveBtn>
          </Styled.Hashtag>
        ))}
        <span className="placeholder">
          {selectedHashtags.length === 0 ? '해시태그를 선택해 주세요' : ''}
        </span>
      </Styled.HashtagsDisplay>

      <Styled.SlidingPane
        closeIcon={<SlArrowLeft fontSize="15" />}
        title="어떤 여행이었나요?"
        isOpen={isHashtagsModalOpen.isPaneOpenLeft}
        onRequestClose={() => {
          setIsHashtagsModalOpen({ isPaneOpenLeft: false });
        }}
        width="22.5rem">
        <TripPlanHashtagsList
          selectedTags={selectedHashtags}
          onSelectHashtag={handleSelectHashtag}
        />
      </Styled.SlidingPane>
    </div>
  );
};

export default TripPlanAddHashtags;
