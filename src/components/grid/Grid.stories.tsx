import React from 'react';

import Dropdown from '../dropdown/dropdown';
import { ComponentWidth } from '../input/componentWidth';
import Input from '../input/input';
import Cell from './Cell';
import Row from './Row';
import Table from './Table';
import TableBody from './TableBody';
import TableHead from './TableHead';
import Option from '../dropdown/option.types';

export default {
    title: 'Table',
    component: Table,
};

const children: Option[] = [
    { value: 'value1', children: 'Element 1' },
    { value: 'value2', children: 'Element 2' },
    { value: 'value3', children: 'Element 3' },
    { value: 'value4', children: 'Element 4' },
    { value: 'value5', children: 'Element 5' },
    { value: 'value6', children: 'Element 6' },
    { value: 'value7', children: 'Element 7' },
    { value: 'value8', children: 'Element 8' },
    { value: 'value9', children: 'Element 9' },
    { value: 'value10', children: 'Element 10' },
    { value: 'value11', children: 'Element 11' },
    { value: 'value12', children: 'Element 12' },
    { value: 'value13', children: 'Element 13' },
    { value: 'value14', children: 'Element 14' },
    { value: 'value15', children: 'Element 15' },
];

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
                <Cell minWidth={100}>Sep 24, 2021</Cell>
                <Cell minWidth={100}>Sep 26, 2021</Cell>
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
            <Row>
                <Cell>
                    <Input
                        name="test"
                        value="Oct 30, 2021"
                        size={ComponentWidth.ExtraSmall}
                    />
                </Cell>
                <Cell>
                    <Input
                        name="test"
                        value="Nov 30, 2021"
                        size={ComponentWidth.ExtraSmall}
                    />
                </Cell>
                <Cell>
                    <Dropdown
                        name="test"
                        value="Text"
                        placeholder="Placeholder"
                        size={ComponentWidth.ExtraSmall}
                        children={children}
                        onSearch={() => {}}
                    />
                </Cell>
                <Cell>
                    <Input
                        name="test"
                        value="$350"
                        size={ComponentWidth.ExtraSmall}
                        disabled={true}
                    />
                </Cell>
                <Cell>
                    <Input
                        name="test"
                        value=""
                        size={ComponentWidth.ExtraSmall}
                        disabled={true}
                    />
                </Cell>
                <Cell>
                    <Input
                        name="test"
                        value=""
                        size={ComponentWidth.ExtraSmall}
                        disabled={true}
                    />
                </Cell>
                <Cell>
                    <Input
                        name="test"
                        value=""
                        size={ComponentWidth.ExtraSmall}
                        disabled={true}
                    />
                </Cell>
                <Cell>
                    <Input
                        name="test"
                        value=""
                        size={ComponentWidth.ExtraSmall}
                        disabled={true}
                    />
                </Cell>
                <Cell>
                    <Input
                        name="test"
                        value=""
                        size={ComponentWidth.ExtraSmall}
                        disabled={true}
                    />
                </Cell>
            </Row>
        </TableBody>
    </Table>
);
