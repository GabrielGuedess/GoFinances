import React from 'react';
import { ViewProps } from 'react-native';

import * as S from './styles';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';

export function Register({ ...props }: ViewProps) {
  return (
    <S.Container {...props}>
      <S.Header>
        <S.Title>Cadastro</S.Title>
      </S.Header>

      <S.Form>
        <S.Fields>
          <Input placeholder='Nome' />
          <Input placeholder='Preço' />
        </S.Fields>

        <Button title='Enviar' />
      </S.Form>
    </S.Container>
  );
}
