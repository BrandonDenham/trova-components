import { css } from '@emotion/core';
import { Colors } from '../../shared/constants/colors';
import { Theme } from '../theme/theme.types';

export const h3Style = (theme: Theme) => css`
    font-size: ${theme.fontSizes.h3};
    line-height: 22px;
    font-family: ${theme.fonts.robotoBold};
    color: ${Colors.Dark};
`;