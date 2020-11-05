import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import Button from './button';
import ButtonProps from './button.types';
import { ThemeProvider } from 'emotion-theming';
import userEvent from '@testing-library/user-event';
import theme from '../../shared/themes/theme';

expect.extend(matchers);

describe('Button', () => {
    let propsPrimary: ButtonProps;
    let propsTertiary: ButtonProps;

    beforeEach(() => {
        propsPrimary = {
            children: 'Text',
            onClick: jest.fn(),
        };
        propsTertiary = {
            children: 'Text',
            subtext: 'Weekday, Mon 01',
            onClick: jest.fn(),
        };
    });

    const renderPrimaryComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Button {...propsPrimary} />
            </ThemeProvider>
        );

    const renderTertiaryComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Button {...propsTertiary} />
            </ThemeProvider>
        );

    it('should have content text', () => {
        const { getByText } = renderPrimaryComponent();
        const element = getByText('Text');
        expect(element).toBeInTheDocument();
    });
    it('should trigger onClick when clicking', () => {
        const { getByTestId } = renderPrimaryComponent();
        expect(propsPrimary.onClick).toHaveBeenCalledTimes(0);
        userEvent.click(getByTestId('button'));
        expect(propsPrimary.onClick).toHaveBeenCalledTimes(1);
    });
    it('should have subtext', () => {
        const { getByText } = renderTertiaryComponent();
        const element = getByText('Weekday, Mon 01');
        expect(element).toBeInTheDocument();
    });
});
