import { css } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const draggableTarget = (
    cursor: string | undefined = undefined,
    backgroundColor: Colors = Colors.PrimaryContentBackground,
    isOver: boolean | undefined = false,
    isDragging: boolean | undefined = false
) => {
    let actualBackgroundColor = backgroundColor;
    if (isOver) {
        actualBackgroundColor = Colors.LightBlue;
    } else if (isDragging) {
        actualBackgroundColor = Colors.LightOrange;
    }
    return css`
        display: flex;
        flex-direction: column;
        border: 1px dashed ${Colors.Gray};
        border-radius: 0.6rem;
        cursor: ${cursor};
        background-color: ${actualBackgroundColor};
        margin: 0.5rem 0rem;
        padding: 1rem;
    `;
};
