import { css } from '@emotion/core';
import { Colors } from '../../shared/constants/colors';
import { Theme } from '../theme/theme.types';
export const header = (theme: Theme, backgroundImage: any) => css`
    border-radius: 11px;
    background-color: ${Colors.Black};
    background: linear-gradient(
            rgba(255, 255, 255, 15%),
            rgba(255, 255, 255, 15%)
        ),
        url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: ${theme.breakpoints.sm}px) {
        padding-left: 1.5rem;
        padding-top: 1.3rem;
    }
    font-family: ${theme.fonts.robotoBold};
    color: ${Colors.White};
`;

export const headerTitle = (theme: Theme) => css`
    font-size: 34px;
    line-height: 40px;
    padding-top: 3.8rem;
    padding-left: 2.31rem;
    padding-bottom: 0.7rem;
    @media (max-width: ${theme.breakpoints.sm}px) {
        padding-left: 0rem;
        padding-top: 0rem;
    }
`;

export const headerDetails = () => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.3px;
`;

export const headerDates = (theme: Theme) => css`
    padding-left: 2.31rem;
    padding-bottom: 2rem;
    @media (max-width: ${theme.breakpoints.sm}px) {
        padding-top: 0.9rem;
        padding-left: 0em;
        padding-bottom: 0.7rem;
        flex-basis: 100%;
    }
`;

export const headerLocation = (theme: Theme) => css`
    padding-left: 0.9rem;
    padding-bottom: 2rem;
    @media (max-width: ${theme.breakpoints.sm}px) {
        padding-left: 0rem;
        flex-basis: 100%;
    }
`;
