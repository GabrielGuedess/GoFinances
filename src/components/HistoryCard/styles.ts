import styled, { css } from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { HistoryCardProps } from '.';

export const Container = styled.View<Pick<HistoryCardProps, 'color'>>`
  ${({ theme, color }) => css`
    width: 100%;
    background: ${theme.colors.shape};
    flex-direction: row;
    justify-content: space-between;
    padding: 13px 24px;
    border-radius: 5px;
    border-left-width: 5px;
    border-left-color: ${color};

    margin-bottom: 8px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(15)}px;
  `}
`;

export const Amount = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(15)}px;
  `}
`;
