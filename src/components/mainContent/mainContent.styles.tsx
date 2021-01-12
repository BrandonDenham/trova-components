import { css } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';
import { Theme } from '../theme/theme.types';
export const mainContent = (theme: Theme) => css`
    width: 100%;
    padding: 2rem 2rem 5rem 2rem;
    border-radius: 35px 0 0 0;
    background-color: ${Colors.PrimaryContentBackground};
    @media (max-width: ${theme.breakpoints.sm}px) {
        border-radius: 23px 23px 0 0;
        padding: 2rem 0rem 2rem 1rem;
    }
`;
