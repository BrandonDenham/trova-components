/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import MaterialTableContainer from '@material-ui/core/TableContainer';
import MaterialTable from '@material-ui/core/Table';

import TableProps from './Table.types';
import { table } from './Table.styles';

/**
 * Renders a <Table /> component
 * @param  props
 * @param  props.children - The table head contents.
 */

const Table: React.FC<TableProps> = ({ children }) => {
    return (
        <MaterialTableContainer css={table()}>
            <MaterialTable>{children}</MaterialTable>
        </MaterialTableContainer>
    );
};

export default Table;
