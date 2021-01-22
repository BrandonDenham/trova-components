/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import MaterialTableHead from '@material-ui/core/TableHead';

import TableHeadProps from './TableHead.types';

/**
 * Renders a <TableHead /> component
 * @param  props
 * @param  props.children - The table head contents.
 */

const TableHead: React.FC<TableHeadProps> = ({ children }) => {
    return <MaterialTableHead>{children}</MaterialTableHead>;
};

export default TableHead;
