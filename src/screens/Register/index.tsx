import React, { useState } from 'react';
import { ViewProps } from 'react-native';

import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';

import * as S from './styles';
import { CategorySelect } from '../../components/Form/CategorySelect';

export function Register({ ...props }: ViewProps) {
  const [transactionType, setTransactionType] = useState('');

  return (
    <S.Container {...props}>
      <S.Header>
        <S.Title>Cadastro</S.Title>
      </S.Header>

      <S.Form>
        <S.Fields>
          <Input placeholder='Nome' />
          <Input placeholder='Preço' />

          <S.TransactionTypes>
            <TransactionTypeButton
              type='up'
              title='Income'
              isActive={transactionType === 'up'}
              onPress={() => setTransactionType('up')}
            />
            <TransactionTypeButton
              type='down'
              title='Outcome'
              isActive={transactionType === 'down'}
              onPress={() => setTransactionType('down')}
            />
          </S.TransactionTypes>

          <CategorySelect title='Category' />
        </S.Fields>

        <Button title='Enviar' />
      </S.Form>
    </S.Container>
  );
}
