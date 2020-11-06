import { css } from '@emotion/core';
import { Theme } from '../Theme/Theme.types';
import { ParagraphSize } from './paragraphSize';

export const pStyle = (size: ParagraphSize, theme: Theme) => css`
    font-family: ${theme.fonts.robotoRegular};
    color: ${theme.colors.dark};
    ${size === ParagraphSize.Small &&
    `
    font-size: 14px;
    line-height: 18px;
    @media (max-width: ${theme.sizes.sm}px) {
        font-size: 13px;
    }`}
    ${size === ParagraphSize.Medium &&
    `
    font-size: 16px;
    line-height: 21px;
    @media (max-width: ${theme.sizes.sm}px) {
        font-size: 14px;
        line-height: 18px;
    }`}
    ${size === ParagraphSize.Large &&
    `
    font-size: 18px;
    line-height: 22px;
    @media (max-width: ${theme.sizes.sm}px) {
        font-size: 16px;
        line-height: 20px;
    }`}
`;
