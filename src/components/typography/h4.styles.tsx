import { css } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';
import { Theme } from '../theme/theme.types';

export const h4Style = (theme: Theme) => css`
    font-size: ${theme.fontSizes.h4};
    line-height: 18px;
    font-family: ${theme.fonts.robotoBold};
    color: ${Colors.Dark};
`;
