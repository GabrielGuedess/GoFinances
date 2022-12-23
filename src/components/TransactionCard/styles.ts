import styled, { css } from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TransactionProps {
  type: 'positive' | 'negative';
}

export const Container = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.shape};
    border-radius: 5px;
    padding: 17px 24px;
    margin-bottom: 16px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular}
    font-size: ${RFValue(14)}px;
  `};
`;

export const Amount = styled.Text<TransactionProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular}
    font-size: ${RFValue(20)}px;
    color: ${
      type === 'positive' ? theme.colors.success : theme.colors.attention
    }
    margin-top: 2px;
  `}
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 19px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  ${({ theme }) => css`
    font-size: ${RFValue(20)}px;
    color: ${theme.colors.text};
  `}
`;

export const CategoryName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular}
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.text};
    margin-left: 17px;
  `}
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular}
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.text};
  `}
`;
