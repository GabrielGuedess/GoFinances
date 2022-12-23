import React from 'react';

import * as S from './styles';

export function HighlightCard() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Entrada</S.Title>
        <S.Icon name='arrow-up-circle' />
      </S.Header>

      <S.Footer>
        <S.Amount>R$ 17.400,00</S.Amount>
        <S.LastTransaction>Última entrada dia 13 de abril</S.LastTransaction>
      </S.Footer>
    </S.Container>
  );
}
