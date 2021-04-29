import { css } from '@emotion/react';

export const draggableButtonStyle = () => css`
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
    &:active {
        cursor: grabbing;
        cursor: -moz-grabbing;
        cursor: -webkit-grabbing;
    }
`;
