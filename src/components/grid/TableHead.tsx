/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import MaterialTableHead from '@material-ui/core/TableHead';

import TableHeadProps from './TableHead.types';

/**
 * Renders a <TableHead /> component
 * @param  props
 * @param  props.children - The table head contents.
 * @param  props.className - For usage as an emotion styled component.
 */

const TableHead: React.FC<TableHeadProps> = ({ children, className }) => {
    return (
        <MaterialTableHead className={className}>{children}</MaterialTableHead>
    );
};

export default TableHead;
