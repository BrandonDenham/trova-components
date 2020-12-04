import { css } from '@emotion/core';
import { Colors } from '../../shared/constants/colors';
import { Theme } from '../theme/theme.types';
export const card = (theme: Theme, backgroundColor: Colors) => css`
    display: flex;
    flex-direction: column;
    padding: 0.9rem 1rem 1.2rem 1.2rem;
    border-radius: 11px;
    background-color: ${backgroundColor};
    margin: 0.25rem 0rem;
    @media (max-width: ${theme.breakpoints.sm}px) {
        padding: 0.9rem 1rem 1.3rem 1rem;
        margin: 0.5rem 1.2rem;
    }
`;
