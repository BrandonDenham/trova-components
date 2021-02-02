import { css, Theme } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const mainContent = (theme: Theme) => css`
    flex-grow: 1;
    overflow-x: auto;
    padding: 2rem 2rem 5rem 2rem;
    border-radius: 35px 0 0 0;
    background-color: ${Colors.PrimaryContentBackground};
    font-family: ${theme.fonts.robotoBold};
    @media (max-width: ${theme.breakpoints.sm}px) {
        border-radius: 23px 23px 0 0;
        padding: 2rem 0rem 2rem 1rem;
    }
`;
