import { css } from '@emotion/core';
import { Colors } from '../../shared/constants/colors';
import { Theme } from '../theme/theme.types';
import { ParagraphSize } from './paragraphSize';

export const pStyle = (size: ParagraphSize, theme: Theme) => css`
    font-family: ${theme.fonts.robotoRegular};
    color: ${Colors.Dark};
    ${size === ParagraphSize.Small &&
    `
    font-size: ${theme.fontSizes.pSmall};
    line-height: 18px;
    @media (max-width: ${theme.sizes.sm}px) {
        font-size: ${theme.fontSizes.pSmallMobile};
    }`}
    ${size === ParagraphSize.Medium &&
    `
    font-size:  ${theme.fontSizes.pMedium};
    line-height: 21px;
    @media (max-width: ${theme.sizes.sm}px) {
        font-size: ${theme.fontSizes.pMediumMobile};
        line-height: 18px;
    }`}
    ${size === ParagraphSize.Large &&
    `
    font-size: ${theme.fontSizes.pLarge};
    line-height: 22px;
    @media (max-width: ${theme.sizes.sm}px) {
        font-size: ${theme.fontSizes.pLargeMobile};
        line-height: 20px;
    }`}
`;
