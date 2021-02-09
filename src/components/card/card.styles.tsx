import { css, Theme } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const card = (theme: Theme, backgroundColor: Colors) => css`
    display: flex;
    flex-direction: column;
    padding: 0.9rem 1rem 1.2rem 1.2rem;
    border-radius: 11px;
    background-color: ${backgroundColor};
    @media (max-width: ${theme.breakpoints.sm}px) {
        padding: 0.9rem 1rem 1.3rem 1rem;
    }
`;
