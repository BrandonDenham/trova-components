import { css, Theme } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const h2Style = (theme: Theme) => css`
    font-size: ${theme.fontSizes.h2};
    line-height: 32px;
    font-family: ${theme.fonts.robotoBold};
    color: ${Colors.Dark};
    @media (max-width: ${theme.breakpoints.sm}px) {
        font-size: ${theme.fontSizes.h2Mobile};
        line-height: 33px;
    }
`;
