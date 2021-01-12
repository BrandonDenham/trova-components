import { css } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';
import { Theme } from '../theme/theme.types';

export const disabledSpan = (theme: Theme) => css`
    box-sizing: border-box;
    font-family: ${theme.fonts.robotoBold};
    font-size: ${theme.fontSizes.inputDisabled};
    line-height: 16px;
    padding-top: 9px;
    color: ${Colors.Muted};
    display: block;
`;

export const errorSpan = (theme: Theme) => css`
    box-sizing: border-box;
    font-family: ${theme.fonts.robotoBold};
    font-size: ${theme.fontSizes.inputError};
    line-height: 16px;
    padding-top: 9px;
    color: ${Colors.DangerText};
    display: block;
`;
