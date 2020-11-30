import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import Textarea from './textarea';
import TextareaProps from './textarea.types';
import { ThemeProvider } from 'emotion-theming';
import theme from '../../shared/themes/theme';
import { TextareaSize } from './textareaSize';

expect.extend(matchers);

describe('Text Area', () => {
    let mediumProps: TextareaProps;
    let largeProps: TextareaProps;
    let disabledProps: TextareaProps;

    beforeEach(() => {
        mediumProps = {
            name: 'test',
            value: 'Text',
            placeholder: 'Placeholder',
            label: 'Form header',
            detail: 'Describe the trip in 2-3 sentences.',
            onChange: jest.fn(),
            size: TextareaSize.Medium,
        };
        largeProps = {
            name: 'test',
            value: 'Text',
            placeholder: 'Placeholder',
            label: 'Form header',
            detail: 'Describe the trip in 2-3 sentences.',
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

    const renderMediumComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Textarea {...mediumProps} />
            </ThemeProvider>
        );

    const renderLargeComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Textarea {...largeProps} />
            </ThemeProvider>
        );
    const renderDisabledComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Textarea {...disabledProps} />
            </ThemeProvider>
        );

    it('default component should have height:91px', () => {
        const { getByTestId } = renderMediumComponent();
        const element = getByTestId('textarea');
        expect(element).toHaveStyleRule('height', '91px');
    });

    it('large component should have height:155px', () => {
        const { getByTestId } = renderLargeComponent();
        const element = getByTestId('textarea');
        expect(element).toHaveStyleRule('height', '155px');
    });

    it('disabled component should be disabled', () => {
        const { getByTestId } = renderDisabledComponent();
        const element = getByTestId('textarea');
        expect(element).toBeDisabled();
    });

    it('onChange method should be triggered', () => {
        const { getByTestId } = renderMediumComponent();
        const element = getByTestId('textarea');
        expect(mediumProps.onChange).toHaveBeenCalledTimes(0);
        fireEvent.change(element, { target: { value: '123' } });
        expect(mediumProps.onChange).toHaveBeenCalledTimes(1);
    });
});
