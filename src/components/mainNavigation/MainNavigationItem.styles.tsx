import { css, Theme } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const mainNavigationItem = css`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
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
    @media (min-width: ${theme.breakpoints.sm + 1}px) {
        ${selected ? `color: ${Colors.Dark}` : `color: ${Colors.LightGray}`}
    }
    @media (max-width: ${theme.breakpoints.sm}px) {
        color: ${Colors.Dark};
    }
    &:hover {
        color: ${Colors.Dark};
    }
`;