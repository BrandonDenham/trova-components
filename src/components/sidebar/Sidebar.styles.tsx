import { css } from '@emotion/core';
import { Theme } from '../theme/theme.types';
export const sidebar = (theme: Theme) => css`
    @media (min-width: ${theme.breakpoints.md + 1}px) {
        max-width: 274px;
    }
    padding: 0rem 1rem 0rem 1rem;
    box-sizing: border-box;
`;
