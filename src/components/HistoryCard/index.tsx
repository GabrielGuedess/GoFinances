import React from 'react';

import * as S from './styles';

export interface HistoryCardProps {
  color: string;
  title: string;
  amount: string;
}

export function HistoryCard({ color, title, amount }: HistoryCardProps) {
  return (
    <S.Container color={color}>
      <S.Title>{title}</S.Title>
      <S.Amount>{amount}</S.Amount>
    </S.Container>
  );
}
