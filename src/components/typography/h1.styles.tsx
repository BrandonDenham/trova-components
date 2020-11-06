import { css } from '@emotion/core';
import { Theme } from '../Theme/Theme.types';

export const h1Style = (theme: Theme) => css`
    font-size: 34px;
    line-height: 34px;
    font-family: ${theme.fonts.robotoBold};
    color: #ffffff;
    @media (max-width: ${theme.sizes.sm}px) {
        font-size: 26px;
        line-height: 30px;
    }
`;
