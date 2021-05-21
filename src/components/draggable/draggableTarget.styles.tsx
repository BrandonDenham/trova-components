import { css } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const draggableTarget = (
    cursor: string | undefined = undefined,
    color: Colors = Colors.DarkGray,
    backgroundColor: Colors = Colors.LightSilver,
    boxShadow: string | undefined = 'none',
    isOver: boolean | undefined = false,
    isDragging: boolean | undefined = false
) => {
    let actualColor = color;
    let actualBackgroundColor = backgroundColor;
    let actualBorder = Colors.Gray;
    let actualBoxShadow = boxShadow;

    if (isOver) {
        actualColor = Colors.DarkPrimary;
        actualBackgroundColor = Colors.LightSecondary;
        actualBorder = Colors.Primary;
        actualBoxShadow =
            'inset 0 1px 0 #dc5f4fa3, inset 1px 0px 0 #dc5f4fa8, 0 2px 2px 0 #f65c4e40, 0 0px 3px 1px #dc5f4f57';
    } else if (isDragging) {
        actualColor = Colors.DarkPrimary;
        actualBackgroundColor = Colors.ExtraLightSecondary;
        actualBorder = Colors.DarkPrimary;
        actualBoxShadow =
            'inset 0 0px 2px 0 #f65c4e1a, inset 0 0px 3px 2px #dc5f4f21, 0 1px 0px 0 #f65c4e21, 0 0px 0px 1px #dc5f4f3b';
    }

    return css`
        display: flex;
        flex-direction: column;
        border: 1px dashed ${actualBorder};
        box-shadow: ${actualBoxShadow};
        border-radius: 0.6rem;
        cursor: ${cursor};
        background-color: ${actualBackgroundColor};
        margin: 0.5rem 0rem;
        padding: 1rem;
        p {
            color: ${actualColor};
        }
    `;
};