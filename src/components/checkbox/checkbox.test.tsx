import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from '@emotion/jest';
import Checkbox from './checkbox';
import CheckboxProps from './checkbox.types';
import { ThemeProvider } from '@emotion/react';
import userEvent from '@testing-library/user-event';

import theme from '../../shared/themes/theme';

expect.extend(matchers);

describe('Checkbox', () => {
    let activeProps: CheckboxProps;

    beforeEach(() => {
        activeProps = {
            name: 'test',
            value: true,
            onChange: jest.fn(),
        };
    });
    const renderActiveComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Checkbox {...activeProps} />
            </ThemeProvider>
        );

    it('onChange method should be triggered when checkbox is clicked', () => {
        const { getByTestId } = renderActiveComponent();
        const element = getByTestId('checkbox');
        expect(activeProps.onChange).toHaveBeenCalledTimes(0);
        userEvent.click(element);
        expect(activeProps.onChange).toHaveBeenCalledTimes(1);
    });
});
