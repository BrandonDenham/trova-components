import { css } from '@emotion/core';
import { Colors } from '../../shared/constants/colors';
import { Theme } from '../theme/theme.types';
export const header = (theme: Theme, backgroundImage: any) => css`
    display: flex;
    flex-direction: column;
    border-radius: 11px;
    background-color: ${Colors.Black};
    /* background-image: url(${backgroundImage}); */
    background: linear-gradient(
            rgba(255, 255, 255, 15%),
            rgba(255, 255, 255, 15%)
        ),
        url(${backgroundImage});
    /* opacity: 55%; */
    background-size: cover;
    background-repeat: no-repeat;
    /* background-origin: content-box; */
    background-origin: border-box;
    margin: 0.25rem 0rem;
    @media (max-width: ${theme.breakpoints.sm}px) {
        padding: 0.9rem 1rem 1.3rem 1rem;
        margin: 0.5rem 1.2rem;
    }
`;

export const headerTitle = (theme: Theme) => css`
    font-family: ${theme.fonts.robotoBold};
    font-size: 34px;
    line-height: 40px;
    color: ${Colors.White};
    padding-top: 67px;
    padding-left: 2.31rem;
    @media (max-width: ${theme.breakpoints.sm}px) {
        padding-left: 1.5rem;
    }
`;

export const headerDetails = () => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-end;
    vertical-align: middle;
`;

export const headerSubtitle = (theme: Theme) => css`
    font-family: ${theme.fonts.robotoBold};
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.3px;
    color: ${Colors.White};
    padding-left: 2.31rem;
    padding-bottom: 2rem;
    @media (max-width: ${theme.breakpoints.sm}px) {
        padding-top: 0.9rem;
        padding-left: 1.5rem;
        padding-bottom: 0.7rem;
    }
`;

export const headerSubtitle1 = (theme: Theme) => css`
    font-family: ${theme.fonts.robotoBold};
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.3px;
    color: ${Colors.White};
    padding-left: 0.9rem;
    padding-bottom: 2rem;
    align-self: flex-start !important;
    @media (max-width: ${theme.breakpoints.sm}px) {
        padding-left: 1.5rem;
    }
`;
export const headerIcon = () => css`
    padding-top: 50px;
`;
