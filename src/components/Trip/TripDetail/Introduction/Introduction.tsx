import { PDFDownloadLink } from '@react-pdf/renderer';
import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Avatar, SubTitle, Text } from '@/components/common';
import * as Styled from './Introduction.styles';
import MarkIcon from '/images/mark.svg';
import EmptiedBookMarkIcon from '/images/emptiedBookMark.svg';
import FilledBookMarkIcon from '/images/filledBookMark.svg';
import DownloadIcon from '/images/download.svg';
import AverageIcon from '/images/averageIcon.svg';
import { IntroductionProps } from './Introduction.types';
import TripDownloadDoc from '../../TripDownload/TripDownloadDoc';
import classifyExpense from '@/utils/classifyExpense';
import { deleteStore, postStore } from '@/apis/trip-records';
import IntroductionSkeleton from './IntroductionSkeleton';

const Introduction = ({
  tripRecordData,
  tripRecordDetailRefetch,
}: IntroductionProps) => {
  const { tripRecordId } = useParams() as { tripRecordId: string };
  const formatDays = tripRecordData
    ? `${tripRecordData.totalDays - 1}박 ${tripRecordData.totalDays}일`
    : '';

  const [mainCountries, ...countries] = tripRecordData
    ? tripRecordData.countries.split(',')
    : '';
  const formatCountries =
    countries.length === 0
      ? mainCountries
      : `${mainCountries} 외 ${countries.length}곳`;

  const { mutate: postStoreMutate } = useMutation({
    mutationFn: () => postStore(tripRecordId),
    onSuccess: () => tripRecordDetailRefetch(),
  });

  const { mutate: deleteStoreMutate } = useMutation({
    mutationFn: () => deleteStore(tripRecordId),
    onSuccess: () => tripRecordDetailRefetch(),
  });

  const onClickStoreButton = () => {
    if (tripRecordData.isStored) return deleteStoreMutate();
    return postStoreMutate();
  };
  return tripRecordData ? (
    <Styled.Container>
      <Styled.Header>
        <Styled.CreatorContainer>
          <Avatar size={32} src={tripRecordData?.member.profileImage || ''} />
          <Text fontWeight={700}>{tripRecordData?.member.nickname}</Text>
          <Styled.Mark src={MarkIcon} alt="mark icon" />
        </Styled.CreatorContainer>
        <Styled.SaveContainer>
          <PDFDownloadLink
            document={
              <TripDownloadDoc schedulesData={tripRecordData?.schedules} />
            }
            fileName="trip_schedule.pdf">
            <img src={DownloadIcon} alt="PDF 다운로드 아이콘" />
          </PDFDownloadLink>

          <Styled.StoreContainer>
            <Styled.StoreButton type="button" onClick={onClickStoreButton}>
              <img
                src={
                  tripRecordData?.isStored
                    ? FilledBookMarkIcon
                    : EmptiedBookMarkIcon
                }
                alt="북마크 아이콘"
              />
            </Styled.StoreButton>
            <Text fontSize={10}>{tripRecordData?.storeCount}</Text>
          </Styled.StoreContainer>
        </Styled.SaveContainer>
      </Styled.Header>
      <Styled.Main>
        <Styled.InfoContainer>
          <Text color="gray" fontSize={12} fontWeight={700}>
            {formatDays}・{formatCountries}
          </Text>
          <SubTitle>{tripRecordData?.title}</SubTitle>
        </Styled.InfoContainer>
        <Styled.RatingAndExpense>
          <Styled.Item>
            <Styled.ItemTitle>
              <Text color="gray" fontSize={12} fontWeight={700}>
                평균 평점
              </Text>
            </Styled.ItemTitle>
            <Styled.AverageContainer>
              <img src={AverageIcon} alt="평점 별 아이콘" />
              <Text color="gray" fontSize={12} fontWeight={700}>
                {tripRecordData?.averageRating}점
              </Text>
            </Styled.AverageContainer>
          </Styled.Item>
          <Styled.Item>
            <Styled.ItemTitle>
              <Text color="gray" fontSize={12} fontWeight={700}>
                여행 경비
              </Text>
            </Styled.ItemTitle>
            <Text color="gray" fontSize={12} fontWeight={700}>
              {classifyExpense(tripRecordData?.expenseRangeType || '')}
            </Text>
          </Styled.Item>
        </Styled.RatingAndExpense>
        <Text>{tripRecordData?.content}</Text>
      </Styled.Main>
      <footer>
        <Styled.HashTagList>
          {tripRecordData?.tags.map((data) => (
            <Text color="tag" fontWeight={700} key={data.id}>
              #{data.hashTagType}
            </Text>
          ))}
        </Styled.HashTagList>
      </footer>
    </Styled.Container>
  ) : (
    <IntroductionSkeleton />
  );
};

export default Introduction;
