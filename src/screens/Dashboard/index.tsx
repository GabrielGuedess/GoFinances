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

      <HighlightCard />
    </S.Container>
  );
}
