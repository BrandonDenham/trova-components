import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from '@emotion/jest';
import RadioGroup from './radioGroup';
import RadioGroupProps  from './radioGroup.types';
import { ThemeProvider } from '@emotion/react';
import userEvent from '@testing-library/user-event';

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
                { value: 'green', children: 'Green Color' },
                { value: 'yellow', children: 'Yellow Color' },
                { value: 'red', children: 'Red Color' },
            ]
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
