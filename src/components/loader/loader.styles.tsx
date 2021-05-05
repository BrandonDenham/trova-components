import { css } from '@emotion/react';
import { loaderSize } from './loaderSize';
import iconLoader from '../../shared/images/icons/loader.svg';

export const containerLoader = (bgColor: string) => css`
    width: 100%;
    height: 100%;
    position: fixed;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    background-color: #ffffff;
    display: flex;
    z-index: 9999;
`;

export const loader = (size: loaderSize, color: string) =>
    css`
      background: ${color};
    `;
