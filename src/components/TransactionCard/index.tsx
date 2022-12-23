import React from 'react';

import * as S from './styles';

interface CategoryProps {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: CategoryProps;
  date: string;
}

export function TransactionCard({
  type,
  title,
  amount,
  category,
  date,
}: TransactionCardProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Amount type={type}>
        {type === 'negative' && '- '}
        {amount}
      </S.Amount>

      <S.Footer>
        <S.Category>
          <S.Icon name={category.icon} />
          <S.CategoryName>{category.name}</S.CategoryName>
        </S.Category>

        <S.Date>{date}</S.Date>
      </S.Footer>
    </S.Container>
  );
}
