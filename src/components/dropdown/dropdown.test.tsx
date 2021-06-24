import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { matchers } from '@emotion/jest';
import Dropdown from './dropdown';
import DropdownProps from './dropdown.types';
import { ThemeProvider } from '@emotion/react';
import theme from '../../shared/themes/theme';
import Option from '../option/option.types';
import MultipleDropdown from './multipleDropdown';
import MultipleDropdownProps from './multipleDropdown.types';

expect.extend(matchers);

const children: Option[] = [
    { value: 'value1', children: 'Element 1' },
    { value: 'value2', children: 'Element 2' },
    { value: 'value3', children: 'Element 3' },
    { value: 'value4', children: 'Element 4' },
    { value: 'value5', children: 'Element 5' },
];
describe('Dropdown', () => {
    let mediumProps: DropdownProps;
    let disabledProps: DropdownProps;
    let multipleDropdownProps: MultipleDropdownProps;

    beforeEach(() => {
        mediumProps = {
            name: 'test',
            value: 'value1',
            placeholder: 'Placeholder',
            label: 'Form header',
            onSearch: jest.fn(),
            children: children,
        };
        disabledProps = {
            name: 'test',
            value: 'value1',
            placeholder: 'Placeholder',
            label: 'Form header',
            disabled: true,
            onSearch: jest.fn(),
            children: children,
        };
        multipleDropdownProps = {
            name: 'test',
            value: ['value1', 'value2'],
            placeholder: 'Placeholder',
            label: 'Form header',
            onSearch: jest.fn(),
            children: children,
        };
    });

    const renderMediumComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Dropdown {...mediumProps} />
            </ThemeProvider>
        );
    const renderDisabledComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Dropdown {...disabledProps} />
            </ThemeProvider>
        );

    const renderMultiDropdownComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <MultipleDropdown {...multipleDropdownProps} />
            </ThemeProvider>
        );

    it('default component should have width:250px', () => {
        const { container } = renderMediumComponent();
        expect(container.firstChild).toHaveStyleRule('width', '250px');
    });

    it('disabled component should be disabled', () => {
        const { getByTestId } = renderDisabledComponent();
        const element = getByTestId('input');
        expect(element).toBeDisabled();
    });

    it('onSearch method should be triggered', () => {
        const { getByTestId } = renderMediumComponent();
        const element = getByTestId('input');
        expect(mediumProps.onSearch).toHaveBeenCalledTimes(0);
        fireEvent.change(element, { target: { value: '123' } });
        expect(mediumProps.onSearch).toHaveBeenCalledTimes(1);
    });

    it('multiple dropdown should have 2 elements selected', () => {
        const { getAllByTestId } = renderMultiDropdownComponent();
        const button = getAllByTestId('button');
        expect(button).toHaveLength(2);
    });
});
