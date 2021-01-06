import { css } from '@emotion/core';
import { Colors } from '../../shared/constants/colors';
export const draggableTarget = (cursor: string = `pointer`) => css`
    display: flex;
    flex-direction: column;
    border: 2px dashed ${Colors.LightGray};
    padding: 2rem;
    text-align: center;
    border-radius: 1rem;
    cursor: ${cursor};
`;