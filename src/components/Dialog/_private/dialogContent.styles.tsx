import { css, Theme } from '@emotion/react';
import { card } from '../../card/card.styles';
import { Colors } from '../../../shared/constants/colors';

export const mainContainer = (theme: Theme) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 300px;
    transform: translate(-50%, -50%);
    @media (min-width: ${theme.breakpoints.md}px) {
        width: 50vw;
    }
`;
export const customCard = (theme: Theme, backgroundColor: Colors) => css`
    ${card(theme, backgroundColor)}
    padding: 2rem;
    padding-right: 3.5rem;
`;
export const closeButton = () => css`
    cursor: pointer;
    position: absolute;
    top: 0%;
    right: 0%;
    padding-right: 1rem;
    padding-top: 1rem;
`;
export const titleContainer = () => css`
    margin-bottom: 0.5rem;
`;
export const subtitleContainer = () => css`
    margin-bottom: 1rem;
    margin-right: 1.5rem;
`;
