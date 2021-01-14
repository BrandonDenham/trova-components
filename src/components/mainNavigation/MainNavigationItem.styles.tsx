import { css } from '@emotion/core';
import { Theme } from '../theme/theme.types';
import { Colors } from '../../shared/constants/colors';

export const mainNavigationItem = css`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
`;
export const mainNavigationItemContent = (
    theme: Theme,
    selected: boolean
) => css`
    font-family: ${theme.fonts.robotoBold};
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    padding-left: 1rem;
    @media (min-width: ${theme.breakpoints.md + 1}px) {
        padding-right: 3rem;
        ${selected ? `color: ${Colors.Dark}` : `color: ${Colors.LightGray}`}
    }
    @media (max-width: ${theme.breakpoints.md}px) {
        padding-bottom: 1rem;
        color: ${Colors.Dark};
    }
    &:hover {
        color: ${Colors.Dark};
    }
`;
export const mainNavigationItemArrow = css`
    padding-right: 1.3rem;
`;
