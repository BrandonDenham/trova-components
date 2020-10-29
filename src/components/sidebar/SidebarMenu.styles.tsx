import { css } from '@emotion/core';
import { Theme } from '../Theme/Theme.types';

export const sidebarMenu = css`
    cursor: pointer;
`;
export const sidebarMenuDiv = css`
    display: flex;
    justify-content: space-between;
`;
export const sidebarMenuTitle = (theme: Theme) => css`
    text-transform: uppercase;
    font-size: 13px;
    line-height: 15px;
    font-family: ${theme.fonts.robotoBold};
    padding: 0rem 0rem 0.7rem 1rem;
    color: ${theme.colors.gray};
`;
export const sidebarMenuDivImg = css`
    padding: 0 1rem 0.7rem 0;
`;
