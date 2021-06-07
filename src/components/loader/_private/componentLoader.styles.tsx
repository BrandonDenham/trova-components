import { css } from '@emotion/react';

export const containerLoader = (bgColor: string) => css`
    width: 100%;
    height: 100%;
    z-index: 99999999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: ${bgColor};
`;
