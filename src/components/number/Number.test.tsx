import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from '@emotion/jest';
import userEvent from '@testing-library/user-event';

import Number from './Number';
import NumberProps from './Number.types';
import { ThemeProvider } from '@emotion/react';
import theme from '../../shared/themes/theme';

expect.extend(matchers);

describe('Number', () => {
    let numberProps: NumberProps;

    beforeEach(() => {
        numberProps = {
            name: 'test',
            value: 1,
            label: 'Form header',
            handleAdd: jest.fn(),
            handleSubstract: jest.fn(),
        };
    });

    const renderComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Number {...numberProps} />
            </ThemeProvider>
        );

    it('handleAdd method should be triggered', () => {
        const { getByTestId } = renderComponent();
        expect(numberProps.handleAdd).toHaveBeenCalledTimes(0);
        userEvent.click(getByTestId('add'));
        expect(numberProps.handleAdd).toHaveBeenCalledTimes(1);
    });

    it('handleSubstract method should be triggered', () => {
        const { getByTestId } = renderComponent();
        expect(numberProps.handleSubstract).toHaveBeenCalledTimes(0);
        userEvent.click(getByTestId('substract'));
        expect(numberProps.handleSubstract).toHaveBeenCalledTimes(1);
    });
});
