import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface TransactionTypeButtonProps extends TouchableOpacityProps {
  title: string;
  type: 'positive' | 'negative';
  isActive: boolean;
}

const icons = {
  positive: 'arrow-up-circle',
  negative: 'arrow-down-circle',
};

export function TransactionTypeButton({
  title,
  type,
  isActive,
  ...props
}: TransactionTypeButtonProps) {
  return (
    <S.Container isActive={isActive} type={type} {...props}>
      <S.Icon type={type} name={icons[type]} />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
