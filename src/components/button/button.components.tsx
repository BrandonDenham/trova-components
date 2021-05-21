import { css } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const draggableButtonStyle = () => css`
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
    box-shadow: -2px -2px 3px rgb(255 255 255 / 70%),
        2px 2px 3px rgb(0 0 0 / 33%);

    &:hover {
        box-shadow: -3px -3px 4px rgb(255 255 255 / 80%),
            1px 1px 0px rgb(0 0 0 / 5%), 2px 2px 5px rgb(0 0 0 / 55%);
        transform: translate3d(0px, -1px, 0px);
    }

    &:active {
        cursor: grabbing;
        cursor: -moz-grabbing;
        cursor: -webkit-grabbing;

        box-shadow: inset 4px 4px 1px rgb(255 255 255 / 20%),
            inset 1px 1px 1px rgb(255 255 255 / 80%),
            inset -1px -1px 1px rgb(255 255 255 / 80%),
            inset -4px -4px 1px rgb(255 255 255 / 20%);
        -webkit-mask-image: -webkit-radial-gradient(${Colors.White}, ${Colors.Black});
    }
`;
