import { css, Theme } from '@emotion/react';

export const mainContainer = (backgroundColor: string, borderRadius: number) => css`
    position: relative;
    display: inline-block;
    minWidth: 20px;
    minHeight: 20px;
    padding: 10px;
    ${backgroundColor && `background-color: ${backgroundColor};`}
    ${borderRadius && `border-radius: ${borderRadius}px;`}
`;

export const detailSpan = (color: string,fontSize: number) => css`
    box-sizing: border-box;
    ${color && `color: ${color};`}
    ${fontSize && `font-size: ${fontSize}px;`}
    line-height: 21px;
    vertical-align: top;
`;