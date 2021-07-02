import { css, Theme } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const mainContent = (theme: Theme) => css`
    padding: 2rem 2rem 5rem 2rem;
    border-radius: 35px 0 0 0;
    background-color: ${Colors.PrimaryContentBackground};
    font-family: ${theme.fonts.robotoBold};
    width: 100%;
    @media (max-width: ${theme.breakpoints.md}px) {
        border-radius: 23px 23px 0 0;
        padding: 6rem 1rem 2rem 1rem;
    }
`;
