import React from 'react';

import { categories } from '../../utils/categories';

import * as S from './styles';

export interface TransactionCardProps {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

export function TransactionCard({
  type,
  name,
  amount,
  category,
  date,
}: TransactionCardProps) {
  const [categoryItem] = categories.filter(item => item.key === category);

  return (
    <S.Container>
      <S.Title>{name}</S.Title>
      <S.Amount type={type}>
        {type === 'negative' && '- '}
        {amount}
      </S.Amount>

      <S.Footer>
        <S.Category>
          <S.Icon name={categoryItem.icon} />
          <S.CategoryName>{categoryItem.name}</S.CategoryName>
        </S.Category>

        <S.Date>{date}</S.Date>
      </S.Footer>
    </S.Container>
  );
}
