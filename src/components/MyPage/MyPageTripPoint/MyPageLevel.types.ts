import { ReactNode } from 'react';

export interface PointLevel {
  level: 'beginner' | 'runner' | 'traveler';
  name: '비기너' | '러너' | '트레블러';
  bgColor: '#d9d9d9' | '#505050' | '#b3f34c';
  bgSize: string;
  benefit: ReactNode;
}

export interface PoinLevelImageProps {
  $isactive: string;
  $level: string;
  $bgColor: string;
  $bgSize: string;
}
