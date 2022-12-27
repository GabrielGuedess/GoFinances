import React, { useState } from 'react';
import { Modal, ViewProps } from 'react-native';
import { useForm } from 'react-hook-form';

import { InputForm } from '../../components/Form/InputForm';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { CategorySelect } from '../CategorySelect';

import * as S from './styles';

interface FormData {
  name: string;
  amount: string;
}

export function Register({ ...props }: ViewProps) {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const { control, handleSubmit } = useForm();

  function handleRegister(form: FormData) {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };

    console.log(data);
  }

  return (
    <S.Container {...props}>
      <S.Header>
        <S.Title>Cadastro</S.Title>
      </S.Header>

      <S.Form>
        <S.Fields>
          <InputForm name='name' control={control} placeholder='Nome' />
          <InputForm name='amount' control={control} placeholder='Preço' />

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

          <CategorySelectButton
            title={category.name}
            onPress={() => setCategoryModalOpen(true)}
          />
        </S.Fields>

        <Button title='Enviar' onPress={handleSubmit(handleRegister)} />
      </S.Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={() => setCategoryModalOpen(false)}
        />
      </Modal>
    </S.Container>
  );
}
