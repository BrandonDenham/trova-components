import { css, Theme } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const mainContent = (theme: Theme) => css`
    padding: 2rem 2rem 5rem 2rem;
    border-radius: 35px 0 0 0;
    background-color: ${Colors.PrimaryContentBackground};
    font-family: ${theme.fonts.robotoBold};
    width: 100%;
    @media (max-width: ${theme.breakpoints.md}px) {
        border-radius: 0;
        padding: 5rem 1rem 2rem 1rem;
    }
    @media (max-width: ${theme.breakpoints.sm}px) {
        padding: 2rem 1rem 5rem 1.5rem;
    }
`;
