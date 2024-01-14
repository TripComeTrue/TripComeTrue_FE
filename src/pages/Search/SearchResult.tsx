// SearchResultComponent.tsx

import React from 'react';

interface SearchResultComponentProps {
  tab: string;
}

const SearchResultComponent: React.FC<SearchResultComponentProps> = ({
  tab,
}) => {
  let results;

  // 각 탭에 따른 결과 설정
  if (tab === 'all') {
    results = '전체 결과 표시';
  } else if (tab === 'city') {
    results = '도시 결과 표시';
  } else if (tab === 'spot') {
    results = '여행지 결과 표시';
  } else if (tab === 'creator') {
    results = '크리에이터 결과 표시';
  }

  return (
    <div>
      <h2>{results}</h2>
      {/* 여기에 각 탭에 따른 결과를 표시하는 컴포넌트들을 추가 */}
    </div>
  );
};

export default SearchResultComponent;
