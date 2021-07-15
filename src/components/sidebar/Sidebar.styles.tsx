import { css, Theme } from '@emotion/react';

import { Colors } from '../../shared/constants/colors';

export const sidebar = (theme: Theme) => css`
    @media (min-width: ${theme.breakpoints.md + 1}px) {
        min-width: 274px;
    }
    @media (max-width: ${theme.breakpoints.md}px) {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 1;
        min-height: 100vh;
    }
    padding: 0rem 2rem;
    box-sizing: border-box;
    background-color: ${Colors.White};
`;
