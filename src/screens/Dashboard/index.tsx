import React from 'react';
import { ViewProps } from 'react-native';

import * as S from './styles';
import { HighlightCard } from '../../components/HighlightCard';

export function Dashboard({ ...props }: ViewProps) {
  return (
    <S.Container {...props}>
      <S.Header>
        <S.UserWrapper>
          <S.UserInfo>
            <S.Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/64827875?v=4',
              }}
            />

            <S.User>
              <S.UserGreeting>Olá, </S.UserGreeting>
              <S.UserName>Gabriel</S.UserName>
            </S.User>
          </S.UserInfo>

          <S.Icon name='power' />
        </S.UserWrapper>
      </S.Header>

      <S.HighlightCard>
        <HighlightCard
          title='Entradas'
          amount='R$ 17.400,00'
          type='up'
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HighlightCard
          title='Saídas'
          amount='R$ 1.259,00'
          type='down'
          lastTransaction='Última saída dia 13 de abril'
        />
        <HighlightCard
          title='Total'
          amount='R$ 16.141,00'
          type='total'
          lastTransaction='01 à 16 de abril'
        />
      </S.HighlightCard>
    </S.Container>
  );
}
