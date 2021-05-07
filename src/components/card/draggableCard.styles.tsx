import { css } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const draggableCardStyle = (
    isDragging: boolean | undefined = false,
    backgroundColor: Colors = Colors.LightSilver
) => {
    const cursor = isDragging ? `-webkit-grabbing` : `grab`;

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
    `;
};