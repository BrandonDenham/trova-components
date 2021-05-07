import { css } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const draggableTarget = (
    cursor: string | undefined = undefined,
    backgroundColor: Colors = Colors.LightSilver,
    isOver: boolean | undefined = false,
    isDragging: boolean | undefined = false
) => {
    let actualBackgroundColor = backgroundColor;
    let actualBorder = Colors.Gray;

    if (isOver) {
        actualBackgroundColor = Colors.DarkSecondary; 
        actualBorder = Colors.DarkPrimary;        

    } else if (isDragging) {
        actualBackgroundColor = Colors.Secondary;
        actualBorder = Colors.Primary;
    }
    
    return css`
        display: flex;
        flex-direction: column;
        border: 1px dashed ${actualBorder};
        border-radius: 0.6rem;
        cursor: ${cursor};
        background-color: ${actualBackgroundColor};
        margin: 0.5rem 0rem;
        padding: 1rem;
    `;
};