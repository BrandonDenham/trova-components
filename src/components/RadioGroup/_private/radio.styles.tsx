import { css } from '@emotion/react';
import { Colors } from '../../../shared/constants/colors';

export const mainContainer = () => css`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const radioCustomIcon = () => css`
    border-radius: 50%;
    width: 1.3rem;
    height: 1.3rem;
    box-shadow: 0 0 0 1px ${Colors.LightGray};
`;

export const radioCheckedIcon = () => css`
    border-radius: 50%;
    width: 1.3rem;
    height: 1.3rem;
    box-shadow: 0 0 0 1px ${Colors.LightGray};
    background: radial-gradient(
        ${Colors.Primary},
        ${Colors.Primary} 60%,
        transparent 70%
    );
`;

export const radioLabel = () => css`
    cursor: pointer;
`;
