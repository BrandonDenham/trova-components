import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from '@emotion/jest';
import RadioGroup from './radioGroup';
import RadioGroupProps from './radioGroup.types';
import { ThemeProvider } from '@emotion/react';
import userEvent from '@testing-library/user-event';
import Option from '../option/option';

import theme from '../../shared/themes/theme';

expect.extend(matchers);

describe('RadioGroup', () => {
    let activeProps: RadioGroupProps;

    beforeEach(() => {
        activeProps = {
            name: 'test',
            value: 'yellow',
            onChange: jest.fn(),
            children: [
                <Option value="green">Green Color</Option>,
                <Option value="yellow">Yellow Color</Option>,
                <Option value="red">Red Color</Option>,
            ],
        };
    });
    const renderActiveComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <RadioGroup {...activeProps} />
            </ThemeProvider>
        );

    it('onChange method should be triggered when checkbox is clicked', () => {
        const { getByTestId } = renderActiveComponent();
        const element = getByTestId('red');
        expect(activeProps.onChange).toHaveBeenCalledTimes(0);
        userEvent.click(element);
        expect(activeProps.onChange).toHaveBeenCalledTimes(1);
    });
});
