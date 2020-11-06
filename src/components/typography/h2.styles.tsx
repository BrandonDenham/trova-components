import { css } from '@emotion/core';
import { Theme } from '../Theme/Theme.types';

export const h2Style = (theme: Theme) => css`
    font-size: 32px;
    line-height: 32px;
    font-family: ${theme.fonts.robotoBold};
    color: ${theme.colors.dark};
    @media (max-width: ${theme.sizes.sm}px) {
        font-size: 28px;
        line-height: 33px;
    }
`;
