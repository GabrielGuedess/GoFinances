import styled, { DefaultTheme, css } from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface IconProps {
  type: 'up' | 'down';
}

interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down';
}

const containerModifiers = {
  up: (theme: DefaultTheme) => css`
    background: ${theme.colors.successLight};
  `,
  down: (theme: DefaultTheme) => css`
    background: ${theme.colors.attentionLight};
  `,
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ theme, isActive, type }) => css`
    width: 48%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: ${isActive ? 0 : 1.5}px solid ${theme.colors.text};
    border-radius: 5px;
    padding: 16px;

    ${isActive && containerModifiers[type](theme)}
  `}
`;

export const Icon = styled(Feather)<IconProps>`
  ${({ theme, type }) => css`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;
    color: ${type === 'up'
      ? theme.colors.success
      : theme.colors.attentionLight};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(14)}px;
    font-family: ${theme.fonts.regular};
  `}
`;
