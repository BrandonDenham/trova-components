/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import MaterialTableCell from '@material-ui/core/TableCell';

import CellProps from './Cell.types';
import { cell } from './Cell.styles';
/**
 * Renders a <Cell /> component
 * @param  props
 * @param  props.children - The cell contents.
 */

const Cell: React.FC<CellProps> = ({ children }) => {
    return <MaterialTableCell css={cell()}>{children}</MaterialTableCell>;
};

export default Cell;
