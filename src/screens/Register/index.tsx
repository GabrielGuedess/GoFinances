import React, { useState } from 'react';
import {
  Modal,
  ViewProps,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { useForm } from 'react-hook-form';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('Preço é obrigatório'),
});

export function Register({ ...props }: ViewProps) {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleRegister(form: FormData) {
    if (!transactionType) {
      return Alert.alert('Selecione o tipo da transação');
    }

    if (category.key === 'category') {
      return Alert.alert('Selecione a categoria');
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };

    console.log(data);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container {...props}>
        <S.Header>
          <S.Title>Cadastro</S.Title>
        </S.Header>

        <S.Form>
          <S.Fields>
            <InputForm
              name='name'
              control={control}
              placeholder='Nome'
              autoCapitalize='sentences'
              autoCorrect={false}
              error={errors.name && String(errors.name.message)}
            />
            <InputForm
              name='amount'
              control={control}
              placeholder='Preço'
              keyboardType='numeric'
              error={errors.amount && String(errors.amount.message)}
            />

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
    </TouchableWithoutFeedback>
  );
}
