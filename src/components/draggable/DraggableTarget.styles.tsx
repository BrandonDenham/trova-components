import { css } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const draggableTarget = (
    cursor: string = `pointer`,
    backgroundColor: Colors = Colors.LightGray
) => css`
    display: flex;
    flex-direction: column;
    border: 2px dashed ${Colors.Gray};
    padding: 2rem;
    text-align: center;
    border-radius: 1rem;
    cursor: ${cursor};
    background-color: ${backgroundColor};
`;
