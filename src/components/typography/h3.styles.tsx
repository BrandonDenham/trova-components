import { css } from '@emotion/core';
import { Theme } from '../Theme/Theme.types';

export const h3Style = (theme: Theme) => css`
    font-size: 22px;
    line-height: 22px;
    font-family: ${theme.fonts.robotoBold};
    color: ${theme.colors.dark};
`;
