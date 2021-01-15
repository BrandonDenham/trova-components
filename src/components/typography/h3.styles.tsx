import { css, Theme } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const h3Style = (theme: Theme) => css`
    font-size: ${theme.fontSizes.h3};
    line-height: 22px;
    font-family: ${theme.fonts.robotoBold};
    color: ${Colors.Dark};
`;
