import React, { useCallback, useEffect, useState } from 'react';
import { ViewProps } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { HighlightCard } from '../../components/HighlightCard';
import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard';

import * as S from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard({ ...props }: ViewProps) {
  const [data, setData] = useState<DataListProps[]>([]);

  async function loadTransaction() {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);

    const transactions = response ? JSON.parse(response) : [];

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        const amount = Number(item.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      }
    );

    setData(transactionsFormatted);
  }

  useEffect(() => {
    loadTransaction();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransaction();
    }, [])
  );

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

      <S.HighlightCards>
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
      </S.HighlightCards>

      <S.Transactions>
        <S.Title>Listagem</S.Title>

        <S.TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard {...item} />}
        />
      </S.Transactions>
    </S.Container>
  );
}
