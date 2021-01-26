import { css, Theme } from '@emotion/react';

import { Colors } from '../../shared/constants/colors';

export const sidebar = (theme: Theme) => css`
    @media (min-width: ${theme.breakpoints.md + 1}px) {
        max-width: 274px;
    }
    padding: 0rem 1rem 0rem 1rem;
    box-sizing: border-box;
    background-color: ${Colors.White};
`;
