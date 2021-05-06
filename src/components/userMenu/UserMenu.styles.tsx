import { css } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const userMenu = css`
    position: relative;
`;

export const userMenuButton = css`
    border: none;
    background-color: #ffffff;
    cursor: pointer;
    padding: .25rem .5rem;
    &:active,
    &:focus {
        box-shadow: none;
        outline: 0;
    }
`;

export const userMenuAvatar = css`
    width: 50px;
    height: 50px;
    vertical-align: middle;
`;

export const userMenuDropdown = css`
    position: absolute;
    display: flex;
    flex-direction: column;
    min-width: 10rem;
    background-color: #ffffff;
    box-shadow: 0 0 2px 0 rgba(120, 120, 120, 0.5);
`;
