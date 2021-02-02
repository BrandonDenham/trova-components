import { css } from '@emotion/react';

export const cell = (minWidth: number | undefined) =>
    css`
        border: 0px !important;
        ${minWidth && `min-width: ${minWidth}px;`}
    `;
