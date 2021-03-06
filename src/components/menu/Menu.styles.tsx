import { css } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const menu = css`
    position: relative;
    left: 250px;
`;

export const menuButton = css`
    border: none;
    background-color: ${Colors.White};
    padding: 0.25rem 0.5rem;
    &:active,
    &:focus {
        box-shadow: none;
        outline: 0;
    }
`;

export const menuAvatar = css`
    width: 50px;
    height: 50px;
    vertical-align: middle;
`;

export const menuDropdown = css`
    position: absolute;
    min-width: 10rem;
    background-color: ${Colors.White};
    box-shadow: 0 0 2px 0 rgba(120, 120, 120, 0.5);
`;
