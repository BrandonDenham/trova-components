import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from '@emotion/jest';
import H1 from './h1';
import H2 from './h2';
import H3 from './h3';
import H4 from './h4';
import P from './p';
import Typography from './typography.types';
import { ThemeProvider } from '@emotion/react';
import theme from '../../shared/themes/theme';
import { Colors } from '../../shared/constants/colors';
import { ParagraphSize } from './paragraphSize';

expect.extend(matchers);

describe('Typography', () => {
    let propsHeader: Typography;
    let propsPSmall: Typography;
    let propsPMedium: Typography;
    let propsPLarge: Typography;

    beforeEach(() => {
        propsHeader = {
            children: 'Room reservation',
        };
        propsPSmall = {
            children: 'Room reservation',
            size: ParagraphSize.Small,
        };
        propsPMedium = {
            children: 'Room reservation',
        };
        propsPLarge = {
            children: 'Room reservation',
            size: ParagraphSize.Large,
        };
    });

    const renderH1Component = () =>
        render(
            <ThemeProvider theme={theme}>
                <H1 {...propsHeader} />
            </ThemeProvider>
        );
    const renderH2Component = () =>
        render(
            <ThemeProvider theme={theme}>
                <H2 {...propsHeader} />
            </ThemeProvider>
        );
    const renderH3Component = () =>
        render(
            <ThemeProvider theme={theme}>
                <H3 {...propsHeader} />
            </ThemeProvider>
        );
    const renderH4Component = () =>
        render(
            <ThemeProvider theme={theme}>
                <H4 {...propsHeader} />
            </ThemeProvider>
        );
    const renderPSmallComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <P {...propsPSmall} />
            </ThemeProvider>
        );
    const renderPMediumComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <P {...propsPMedium} />
            </ThemeProvider>
        );
    const renderPLargeComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <P {...propsPLarge} />
            </ThemeProvider>
        );

    it('h1 should have text', () => {
        const { getByText } = renderH1Component();
        const element = getByText('Room reservation');
        expect(element).toBeInTheDocument();
    });

    it('h1 text size should be correct', () => {
        const { getByText } = renderH1Component();
        const element = getByText('Room reservation');
        expect(element).toHaveStyleRule('font-size', theme.fontSizes.h1);
    });

    it('h1 should be white', () => {
        const { getByTestId } = renderH1Component();
        const element = getByTestId('h1');
        expect(element).toHaveStyleRule('color', Colors.White);
    });

    it('h2 should have text', () => {
        const { getByText } = renderH2Component();
        const element = getByText('Room reservation');
        expect(element).toBeInTheDocument();
    });

    it('h2 text size should be correct', () => {
        const { getByText } = renderH2Component();
        const element = getByText('Room reservation');
        expect(element).toHaveStyleRule('font-size', theme.fontSizes.h2);
    });

    it('h2 should be dark', () => {
        const { getByTestId } = renderH2Component();
        const element = getByTestId('h2');
        expect(element).toHaveStyleRule('color', Colors.Dark);
    });

    it('h3 should have text', () => {
        const { getByText } = renderH3Component();
        const element = getByText('Room reservation');
        expect(element).toBeInTheDocument();
    });

    it('h3 text size should be correct', () => {
        const { getByText } = renderH3Component();
        const element = getByText('Room reservation');
        expect(element).toHaveStyleRule('font-size', theme.fontSizes.h3);
    });

    it('h3 should be dark', () => {
        const { getByTestId } = renderH3Component();
        const element = getByTestId('h3');
        expect(element).toHaveStyleRule('color', Colors.Dark);
    });

    it('h4 should have text', () => {
        const { getByText } = renderH4Component();
        const element = getByText('Room reservation');
        expect(element).toBeInTheDocument();
    });

    it('h4 text size should be correct', () => {
        const { getByText } = renderH4Component();
        const element = getByText('Room reservation');
        expect(element).toHaveStyleRule('font-size', theme.fontSizes.h4);
    });

    it('h4 should be dark', () => {
        const { getByTestId } = renderH4Component();
        const element = getByTestId('h4');
        expect(element).toHaveStyleRule('color', Colors.Dark);
    });

    it('small paragraph should have text', () => {
        const { getByText } = renderPSmallComponent();
        const element = getByText('Room reservation');
        expect(element).toBeInTheDocument();
    });

    it('small paragraph text size should be correct', () => {
        const { getByText } = renderPSmallComponent();
        const element = getByText('Room reservation');
        expect(element).toHaveStyleRule('font-size', theme.fontSizes.pSmall);
    });

    it('small paragraph should be dark', () => {
        const { getByTestId } = renderPSmallComponent();
        const element = getByTestId('p');
        expect(element).toHaveStyleRule('color', Colors.Dark);
    });

    it('medium paragraph should have text', () => {
        const { getByText } = renderPMediumComponent();
        const element = getByText('Room reservation');
        expect(element).toBeInTheDocument();
    });

    it('medium paragraph text size should be correct', () => {
        const { getByText } = renderPMediumComponent();
        const element = getByText('Room reservation');
        expect(element).toHaveStyleRule('font-size', theme.fontSizes.pMedium);
    });

    it('medium paragraph should be dark', () => {
        const { getByTestId } = renderPMediumComponent();
        const element = getByTestId('p');
        expect(element).toHaveStyleRule('color', Colors.Dark);
    });

    it('large paragraph should have text', () => {
        const { getByText } = renderPLargeComponent();
        const element = getByText('Room reservation');
        expect(element).toBeInTheDocument();
    });

    it('large paragraph text size should be correct', () => {
        const { getByText } = renderPLargeComponent();
        const element = getByText('Room reservation');
        expect(element).toHaveStyleRule('font-size', theme.fontSizes.pLarge);
    });

    it('large paragraph should be dark', () => {
        const { getByTestId } = renderPLargeComponent();
        const element = getByTestId('p');
        expect(element).toHaveStyleRule('color', Colors.Dark);
    });
});
