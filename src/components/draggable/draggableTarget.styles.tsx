import { css } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const draggableTarget = (
    cursor: string = `pointer`,
    backgroundColor: Colors = Colors.PrimaryContentBackground
) => css`
    display: flex;
    flex-direction: column;
    border: 1px dashed ${Colors.Gray};
    border-radius: 0.6rem;
    cursor: ${cursor};
    background-color: ${backgroundColor};
    margin: 0.5rem 0rem;
    padding: 1rem;
`;
