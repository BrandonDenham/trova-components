import { css } from '@emotion/react';

export const badgeContainer = (backgroundColor: string) => css`
    position: relative;
    display: inline-block;
    minWidth: 20px;
    minHeight: 20px;
    padding: 10px;
    ${backgroundColor && `background-color: ${backgroundColor};`}
    border-radius: 8px;
`;

export const badgeText = (color: string) => css`
    box-sizing: border-box;
    ${color && `color: ${color};`}
    line-height: 21px;
    vertical-align: top;
`;