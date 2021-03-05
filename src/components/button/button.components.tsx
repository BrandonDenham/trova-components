import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

import Button from './button';

export const StyledDraggableButton = styled(Button)`
    cursor: ${props => (props.theme as Theme).cursor.grab};
    cursor: ${props =>
        (props.theme as Theme).cursor
            .webkitGrabbing}; /* fallback if grab cursor is unsupported (chrome) */
`;
