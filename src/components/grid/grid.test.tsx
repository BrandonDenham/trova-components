import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';

import Cell from './cell';
import Row from './row';
import Table from './table';
import TableHead from './tableHead';
import theme from '../../shared/themes/theme';

describe('Grid', () => {


    const renderContent = () =>
        render(
            <ThemeProvider theme={theme}>
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
                </Table>
            </ThemeProvider>
        );

    it('should include received children', () => {
        const { getByText } = renderContent();
        const element = getByText('Start Date');
        expect(element).toBeInTheDocument();
    });
});
