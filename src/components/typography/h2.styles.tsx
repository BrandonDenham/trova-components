import { css } from '@emotion/core';
import { Colors } from '../../shared/constants/colors';
import { Theme } from '../theme/theme.types';

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
