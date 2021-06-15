/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React, { useCallback, SyntheticEvent } from 'react';
import Card from '../../card';
import { H3, P } from '../../typography';
import {
    mainContainer,
    closeButton,
    titleContainer,
    subtitleContainer,
    customCard,
} from './dialogContent.styles';
import Icon, { IconName, IconSize } from '../../icon';
import DialogContentProps from './dialogContent.types';

const DialogContent = React.forwardRef<HTMLInputElement, DialogContentProps>(
    (
        {
            children,
            backgroundColor,
            showCloseButton,
            header,
            onClose,
        },
        ref
    ) => {
        const theme = useTheme();
        const cardStyles = customCard(theme, backgroundColor);

        const handleCloseButtonClick = useCallback(
            (event: SyntheticEvent) => {
                onClose && onClose(event);
            },
            [onClose]
        );

        return (
            <div
                ref={ref}
                data-testid={'dialog-content'}
                css={mainContainer(theme)}
                tabIndex={-1}
            >
                <Card
                    customCss={cardStyles}
                    backgroundColor={backgroundColor}
                >
                    {showCloseButton && (
                        <div
                            data-testid="close-button"
                            css={closeButton}
                            onClick={handleCloseButtonClick}
                        >
                            <Icon name={IconName.Close} size={IconSize.Xl} />
                        </div>
                    )}

                    {header && (
                        <div data-testid="header">
                            <div css={titleContainer}>
                                <H3 isBold={true}>{header.title}</H3>
                            </div>

                            {header.subtitle && (
                                <div css={subtitleContainer}>
                                    <P isBold={false}>{header.subtitle}</P>
                                </div>
                            )}
                        </div>
                    )}

                    {children}
                </Card>
            </div>
        );
    }
);

export default DialogContent;
