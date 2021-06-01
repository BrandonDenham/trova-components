import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from '@emotion/jest';
import userEvent from '@testing-library/user-event';

import Currency from './Currency';
import CurrencyProps from './Currency.types';
import { ThemeProvider } from '@emotion/react';
import theme from '../../shared/themes/theme';

expect.extend(matchers);

describe('Currency', () => {
    let currencyProps: CurrencyProps;

    beforeEach(() => {
        currencyProps = {
            name: 'test',
            value: 1,
            label: 'Title label',
        };
    });

    const renderComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Currency {...currencyProps} />
            </ThemeProvider>
        );
});
