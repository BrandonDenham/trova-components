import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import Input from './input';
import InputProps from './input.types';
import { ThemeProvider } from 'emotion-theming';
import theme from '../../shared/themes/theme';
import { InputSize } from './inputSize';

expect.extend(matchers);

describe('Input', () => {
    let smallProps: InputProps;
    let mediumProps: InputProps;
    let largeProps: InputProps;
    let extraLargeProps: InputProps;
    let disabledProps: InputProps;

    beforeEach(() => {
        smallProps = {
            name: 'test',
            value: 'Text',
            placeholder: 'Placeholder',
            label: 'Form header',
            detail: 'Describe the trip in 2-3 sentences.',
            size: InputSize.Small,
        };
        mediumProps = {
            name: 'test',
            value: 'Text',
            placeholder: 'Placeholder',
            label: 'Form header',
            detail: 'Describe the trip in 2-3 sentences.',
            onChange: jest.fn(),
        };
        largeProps = {
            name: 'test',
            value: 'Text',
            placeholder: 'Placeholder',
            label: 'Form header',
            detail: 'Describe the trip in 2-3 sentences.',
            size: InputSize.Large,
        };
        extraLargeProps = {
            name: 'test',
            value: 'Text',
            placeholder: 'Placeholder',
            label: 'Form header',
            detail: 'Describe the trip in 2-3 sentences.',
            size: InputSize.ExtraLarge,
        };
        disabledProps = {
            name: 'test',
            value: 'Text',
            placeholder: 'Placeholder',
            label: 'Form header',
            detail: 'Describe the trip in 2-3 sentences.',
            disabled: true,
        };
    });

    const renderSmallComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Input {...smallProps} />
            </ThemeProvider>
        );

    const renderMediumComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Input {...mediumProps} />
            </ThemeProvider>
        );

    const renderLargeComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Input {...largeProps} />
            </ThemeProvider>
        );

    const renderExtraLargeComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Input {...extraLargeProps} />
            </ThemeProvider>
        );

    const renderDisabledComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Input {...disabledProps} />
            </ThemeProvider>
        );

    it('small component should have width:157px', () => {
        const { container } = renderSmallComponent();
        expect(container.firstChild).toHaveStyleRule('width', '157px');
    });

    it('default component should have width:250px', () => {
        const { container } = renderMediumComponent();
        expect(container.firstChild).toHaveStyleRule('width', '250px');
    });

    it('large component should have width:343px', () => {
        const { container } = renderLargeComponent();
        expect(container.firstChild).toHaveStyleRule('width', '343px');
    });

    it('extra large component should have width:436px', () => {
        const { container } = renderExtraLargeComponent();
        expect(container.firstChild).toHaveStyleRule('width', '436px');
    });

    it('disabled component should be disabled', () => {
        const { getByTestId } = renderDisabledComponent();
        const element = getByTestId('input');
        expect(element).toBeDisabled();
    });

    it('onChange method should be triggered', () => {
        const { getByTestId } = renderMediumComponent();
        const element = getByTestId('input');
        expect(mediumProps.onChange).toHaveBeenCalledTimes(0);
        fireEvent.change(element, { target: { value: '123' } });
        expect(mediumProps.onChange).toHaveBeenCalledTimes(1);
    });
});
