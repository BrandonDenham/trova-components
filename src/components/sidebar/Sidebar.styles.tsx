import { css, Theme } from '@emotion/react';

import { Colors } from '../../shared/constants/colors';

export const sidebar = (theme: Theme) => css`
    @media (min-width: ${theme.breakpoints.md + 1}px) {
        width: 274px;
        min-width: 274px;
    }
    padding: 0rem 2rem;
    box-sizing: border-box;
    background-color: ${Colors.White};
`;
