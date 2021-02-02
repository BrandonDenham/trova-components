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
 * @param  props.className - For usage as an emotion styled component.
 * @param props.minWidth - Minimum width for the cell's contents
 */

const Cell: React.FC<CellProps> = ({ children, className, minWidth }) => {
    return (
        <MaterialTableCell css={cell(minWidth)} className={className}>
            {children}
        </MaterialTableCell>
    );
};

export default Cell;
