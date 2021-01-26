/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import MaterialTableBody from '@material-ui/core/TableBody';

import TableBodyProps from './TableBody.types';

/**
 * Renders a <TableBody /> component
 * @param  props
 * @param  props.children - The table body contents.
 * @param  props.className - For usage as an emotion styled component.
 */

const TableBody: React.FC<TableBodyProps> = ({ children, className }) => {
    return (
        <MaterialTableBody className={className}>{children}</MaterialTableBody>
    );
};

export default TableBody;
