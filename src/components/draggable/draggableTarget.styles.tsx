import { css } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const draggableTarget = (
    isOver: boolean | undefined = false,
    isDragging: boolean | undefined = false
) => {
    let color = Colors.DarkGray;
    let backgroundColor = Colors.LightSilver;
    let border = Colors.Gray;
    let boxShadow = 'none';

    if (isOver) {
        color = Colors.DarkPrimary;
        backgroundColor = Colors.LightSecondary;
        border = Colors.Primary;
        boxShadow =
            'inset 0 1px 0 #dc5f4fa3, inset 1px 0px 0 #dc5f4fa8, 0 2px 2px 0 #f65c4e40, 0 0px 3px 1px #dc5f4f57';
    } else if (isDragging) {
        color = Colors.DarkPrimary;
        backgroundColor = Colors.ExtraLightSecondary;
        border = Colors.DarkPrimary;
        boxShadow =
            'inset 0 0px 2px 0 #f65c4e1a, inset 0 0px 3px 2px #dc5f4f21, 0 1px 0px 0 #f65c4e21, 0 0px 0px 1px #dc5f4f3b';
    }

    return css`
        display: flex;
        flex-direction: column;
        border: 1px dashed ${border};
        box-shadow: ${boxShadow};
        border-radius: 0.6rem;
        background-color: ${backgroundColor};
        margin: 0.5rem 0rem;
        padding: 1rem;
        p {
            color: ${color};
            cursor: default;
        }
    `;
};
