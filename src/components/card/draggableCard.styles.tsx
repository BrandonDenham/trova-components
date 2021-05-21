import { css } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const draggableCardStyle = (
    isDragging: boolean | undefined = false,
    backgroundColor: Colors = Colors.LightSilver
) => {
    const cursor = isDragging ? `-webkit-grabbing` : `grab`;
    const mask = isDragging
        ? `-webkit-radial-gradient(${Colors.White}, ${Colors.Black})`
        : `none`;

    return css`
        display: flex;
        flex-direction: column;
        cursor: ${cursor};
        background-color: ${backgroundColor};
        border: 1px dashed ${Colors.Gray};
        border-radius: 0.6rem;
        margin: 0.5rem 0rem;
        padding: 1rem;
        box-shadow: 0 4px 24px -1px rgb(0 0 0 / 5%);
        -webkit-mask-image: ${mask};

        &:hover {
            background-color: ${Colors.White};
            border: 1px solid ${Colors.BlackAlpha};
            box-shadow: 0 1px 2px 0 rgb(60 64 67 / 40%),
                0 1px 3px 1px rgb(60 64 67 / 22%);
            transform: translate3d(0px, -2px, 0px);
        }

        &:active {
            background-color: ${Colors.White};
            border: 1px solid ${Colors.BlackAlpha};
            box-shadow: inset 0 1px 2px 0 rgb(60 64 67 / 22%),
                inset 0 1px 4px 0px rgb(60 64 67 / 22%);
        }
    `;
};
