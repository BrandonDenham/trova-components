import React from 'react';

import Cell from './cell';
import Row from './row';
import Table from './table';
import TableBody from './tableBody';
import TableHead from './tableHead';

export default {
    title: 'Table',
    component: Table,
};

export const Grid = () => (
    <Table>
        <TableHead>
            <Row>
                <Cell>Start Date</Cell>
                <Cell>End Date</Cell>
                <Cell>Days of week</Cell>
                <Cell>Single supp</Cell>
                <Cell>6</Cell>
                <Cell>8</Cell>
                <Cell>10</Cell>
                <Cell>14</Cell>
                <Cell>20</Cell>
            </Row>
        </TableHead>
        <TableBody>
            <Row>
                <Cell>Sep 24, 2021</Cell>
                <Cell>Sep 26, 2021</Cell>
                <Cell>All</Cell>
                <Cell>$350</Cell>
                <Cell>$1450</Cell>
                <Cell>$1350</Cell>
                <Cell>$1200</Cell>
                <Cell>$1100</Cell>
                <Cell>$900</Cell>
            </Row>
            <Row>
                <Cell>Host Price</Cell>
                <Cell>{}</Cell>
                <Cell>{}</Cell>
                <Cell>$395</Cell>
                <Cell>$1650</Cell>
                <Cell>$1550</Cell>
                <Cell>$1400</Cell>
                <Cell>$1300</Cell>
                <Cell>$1100</Cell>
            </Row>
        </TableBody>
    </Table>
);
