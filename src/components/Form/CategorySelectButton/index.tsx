import React from 'react';

import * as S from './styles';

interface CategorySelectProps {
  title: string;
  onPress: () => void;
}

export function CategorySelectButton({ title, onPress }: CategorySelectProps) {
  return (
    <S.Container onPress={onPress}>
      <S.Category>{title}</S.Category>
      <S.Icon name='chevron-down' />
    </S.Container>
  );
}
