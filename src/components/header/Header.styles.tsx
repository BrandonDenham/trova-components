import { css, Theme } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const header = (theme: Theme, backgroundImage: any) => css`
    border-radius: 1.5rem;
    background-color: ${Colors.Black};
    background: linear-gradient(
            rgba(255, 255, 255, 15%),
            rgba(255, 255, 255, 15%)
        ),
        url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding: 1.3rem;
    font-family: ${theme.fonts.robotoBold};
    color: ${Colors.White};
    text-align: left;
    @media (max-width: ${theme.breakpoints.sm}px) {
        border-radius: 0;
        padding: 8rem 1rem 2rem;
        margin: 0 -1rem;
    }
`;

export const headerTitle = (theme: Theme) => css`
    font-size: ${theme.fontSizes.h1};
    line-height: 40px;
    padding: 1.5rem 0 1rem 2.31rem;
    text-shadow: -1px 1px 1px ${Colors.TextShadowLight},
        -2px 2px 1px ${Colors.TextShadowExtraLight};
    @media (max-width: ${theme.breakpoints.sm}px) {
        font-size: ${theme.fontSizes.h1Mobile};
        line-height: 30px;
        padding: 0.25rem 0 1rem 0;
    }
`;

export const headerDetails = (theme: Theme) => css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    font-family: ${theme.fonts.robotoMedium};
    font-size: ${theme.fontSizes.pSmall};
    line-height: 16px;
    letter-spacing: 0.3px;
    @media (max-width: ${theme.breakpoints.sm}px) {
        font-size: ${theme.fontSizes.pSmallMobile};
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const headerDates = (theme: Theme) => css`
    padding: 0 0 0.75rem 2.31rem;
    text-shadow: -1px 1px 1px ${Colors.TextShadowMedium},
        -2px 2px 1px ${Colors.TextShadowExtraLight};
    @media (max-width: ${theme.breakpoints.sm}px) {
        padding: 0 0 0.3rem 0;
        flex-basis: 100%;
    }
`;

export const headerLocation = (theme: Theme) => css`
    display: flex;
    align-items: center;
    padding: 0 0 0.75rem 1.5rem;
    text-shadow: -1px 1px 1px ${Colors.TextShadowMedium},
        -2px 2px 1px ${Colors.TextShadowExtraLight};
    @media (max-width: ${theme.breakpoints.sm}px) {
        padding: 0 0 .25rem 0;
        flex-basis: 100%;
    }
`;
