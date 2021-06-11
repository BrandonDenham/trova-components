import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from '@emotion/jest';
import { ThemeProvider } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';
import theme from '../../shared/themes/theme';
import DialogProps from './dialog.types';
import Dialog from './dialog';
import Button from '../button';
import { ButtonType } from '../button/buttonType';
import userEvent from '@testing-library/user-event';

expect.extend(matchers);

describe('Dialog', () => {
    let singleProps: DialogProps;
    let withHeaderProps: DialogProps;
    let customBackgroundProps: DialogProps;
    let withoutCloseButtonProps: DialogProps;
    let notOpenProps: DialogProps;
    let allElementsProps: DialogProps;
    const customBackgroundColor: Colors = Colors.TableLightGray;

    beforeEach(() => {
        singleProps = {
            open: true,
            children: (
                <React.Fragment>
                    <Button buttonType={ButtonType.Primary}>MyButton</Button>
                </React.Fragment>
            ),
        };
        allElementsProps = {
            open: true,
            header: {
                title: 'Are you sure want to proceed?',
                subtitle: 'My subtitle is more long',
            },
            onClose: jest.fn(),
            children: (
                <React.Fragment>
                    <Button buttonType={ButtonType.Primary}>MyButton</Button>
                </React.Fragment>
            ),
        };

        notOpenProps = {
            open: false,
            children: (
                <React.Fragment>
                    <Button buttonType={ButtonType.Primary}>MyButton</Button>
                </React.Fragment>
            ),
        };
        withHeaderProps = {
            header: {
                title: 'Are you sure want to proceed?',
                subtitle: 'My subtitle is more long',
            },
            open: true,
            children: (
                <React.Fragment>
                    <Button buttonType={ButtonType.Primary}>MyButton</Button>
                </React.Fragment>
            ),
        };
        customBackgroundProps = {
            backgroundColor: customBackgroundColor,
            open: true,
            children: (
                <React.Fragment>
                    <Button buttonType={ButtonType.Primary}>MyButton</Button>
                </React.Fragment>
            ),
        };
        withoutCloseButtonProps = {
            showCloseButton: false,
            open: true,
            children: (
                <React.Fragment>
                    <Button buttonType={ButtonType.Primary}>MyButton</Button>
                </React.Fragment>
            ),
        };
    });

    const renderSingleComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Dialog {...singleProps} />
            </ThemeProvider>
        );
    const renderWithHeaderComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Dialog {...withHeaderProps} />
            </ThemeProvider>
        );
    const renderWithoutCloseButtonComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Dialog {...withoutCloseButtonProps} />
            </ThemeProvider>
        );
    const renderNotOpenComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Dialog {...notOpenProps} />
            </ThemeProvider>
        );
    const renderCustomBackgroundComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Dialog {...customBackgroundProps} />
            </ThemeProvider>
        );
    const renderAllElementsComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Dialog {...allElementsProps} />
            </ThemeProvider>
        );

    it('should trigger onClose when close button are clicked', () => {
        const { getByTestId } = renderAllElementsComponent();
        expect(allElementsProps.onClose).toHaveBeenCalledTimes(0);
        userEvent.click(getByTestId('close-button'));
        expect(allElementsProps.onClose).toHaveBeenCalledTimes(1);
    });

    it('should render all elements', () => {
        const { getByTestId, queryByTestId } = renderAllElementsComponent();
        const child = getByTestId('button');
        const header = getByTestId('header');
        const closeButton = queryByTestId('close-button');
        expect(child).toBeInTheDocument();
        expect(header).toBeInTheDocument();
        expect(closeButton).toBeInTheDocument();
    });

    it('should render children', () => {
        const { getByTestId } = renderSingleComponent();
        const child = getByTestId('button');
        expect(child).toBeInTheDocument();
    });

    it('should render header', () => {
        const { getByTestId } = renderWithHeaderComponent();
        const header = getByTestId('header');
        expect(header).toBeInTheDocument();
    });

    it('should not render close button', () => {
        const { queryByTestId } = renderWithoutCloseButtonComponent();
        const closeButton = queryByTestId('close-button');
        expect(closeButton).toBeNull;
    });

    it('should not render DialogContent', () => {
        const { queryByTestId } = renderNotOpenComponent();
        const dialogContent = queryByTestId('dialog-content');
        expect(dialogContent).toBeNull();
    });

    it('should render with colored background', () => {
        const { queryByTestId } = renderCustomBackgroundComponent();
        const container = queryByTestId('card');
        expect(container).toHaveStyleRule(
            'background-color',
            customBackgroundColor
        );
    });
});
