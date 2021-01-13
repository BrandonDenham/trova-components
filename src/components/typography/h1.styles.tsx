import { css, Theme } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const h1Style = (theme: Theme) => css`
    font-size: ${theme.fontSizes.h1};
    line-height: 34px;
    font-family: ${theme.fonts.robotoBold};
    color: ${Colors.White};
    @media (max-width: ${theme.breakpoints.sm}px) {
        font-size: ${theme.fontSizes.h1Mobile};
        line-height: 30px;
    }
`;
