/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import MaterialTableBody from '@material-ui/core/TableBody';

import TableBodyProps from './tableBody.types';

/**
 * Renders a <TableBody /> component
 * @param  props
 * @param  props.children - The table body contents.
 */

const TableBody: React.FC<TableBodyProps> = ({ children }) => {
    return <MaterialTableBody>{children}</MaterialTableBody>;
};

export default TableBody;
