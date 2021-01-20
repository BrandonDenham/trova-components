/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React from 'react';
import MaterialTableRow from '@material-ui/core/TableRow';


import RowProps from './row.types';
import {
    row
} from './row.styles';

/**
 * Renders a <Row /> component
 * @param  props
 * @param  props.children - The row contents.
 */

const Row: React.FC<RowProps> = ({ children }) => {
    const theme = useTheme();
    return (
        <MaterialTableRow css={row(theme)}>{children}</MaterialTableRow>
    );
};

export default Row;
