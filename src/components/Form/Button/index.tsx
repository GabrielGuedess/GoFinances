import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...props }: ButtonProps) {
  return (
    <S.Container {...props}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
