import { css, Theme } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

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
    color: ${Colors.Gray};
`;
export const sidebarMenuDivImg = css`
    padding: 0 1rem 0.7rem 0;
`;
