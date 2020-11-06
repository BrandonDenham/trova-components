import { css } from '@emotion/core';
import { Theme } from '../Theme/Theme.types';

export const h4Style = (theme: Theme) => css`
    font-size: 18px;
    line-height: 18px;
    font-family: ${theme.fonts.robotoBold};
    color: ${theme.colors.dark};
`;
