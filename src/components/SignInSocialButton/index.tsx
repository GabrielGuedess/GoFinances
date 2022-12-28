import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { SvgProps } from 'react-native-svg';

import * as S from './styles';

interface SignInSocialButtonProps extends TouchableOpacityProps {
  title: string;
  svg: React.FC<SvgProps>;
}

export function SignInSocialButton({
  title,
  svg: Svg,
  ...props
}: SignInSocialButtonProps) {
  return (
    <S.Button activeOpacity={0.8} {...props}>
      <S.ImageContainer>
        <Svg />
      </S.ImageContainer>

      <S.Title>{title}</S.Title>
    </S.Button>
  );
}
