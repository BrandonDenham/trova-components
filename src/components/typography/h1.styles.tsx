import { css } from '@emotion/core';
import { Colors } from '../../shared/constants/colors';
import { Theme } from '../theme/theme.types';

export const h1Style = (theme: Theme) => css`
    font-size: ${theme.fontSizes.h1};
    line-height: 34px;
    font-family: ${theme.fonts.robotoBold};
    color: ${Colors.White};
    @media (max-width: ${theme.sizes.sm}px) {
        font-size: ${theme.fontSizes.h1Mobile};
        line-height: 30px;
    }
`;
