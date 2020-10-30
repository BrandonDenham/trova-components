import { css } from '@emotion/core';
import { Theme } from '../Theme/Theme.types';

export const mainNavigationItem = css`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
`;
export const mainNavigationItemContent = (theme: Theme, selected: boolean) => css`
    font-family: ${theme.fonts.robotoBold};
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    padding-left: 1rem;
    @media (min-width: ${theme.sizes.md + 1}px) {
        padding-right: 3rem;
        ${selected
            ? `color: ${theme.colors.dark}`
            : `color: ${theme.colors.lightGray}`}
    }
    @media (max-width: ${theme.sizes.md}px) {
        padding-bottom: 1rem;
        color: ${theme.colors.dark};
    }
    &:hover {
        color: ${theme.colors.dark};
    }
`;
export const mainNavigationItemArrow = css`
    padding-right: 1.3rem;
`;
