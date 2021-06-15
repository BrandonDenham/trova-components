/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useCallback, SyntheticEvent } from 'react';
import { Modal } from '@material-ui/core';
import { Colors } from '../../shared/constants/colors';
import DialogProps from './dialog.types';
import DialogContent from './_private/dialogContent';

const Dialog = React.forwardRef<HTMLInputElement, DialogProps>(
    (
        {
            children,
            header,
            backgroundColor = Colors.White,
            showCloseButton = true,
            enableBackgroundClick = false,
            open = false,
            onClose,
        },
        ref
    ) => {
        const handleClose = useCallback(
            (event: SyntheticEvent) => {
                onClose && onClose(event);
            },
            [onClose]
        );

        return (
            <Modal
                disableEnforceFocus
                disableAutoFocus
                open={open}
                onClose={handleClose}
                disableBackdropClick={!enableBackgroundClick}
                BackdropProps={{
                    style: { backgroundColor: Colors.BackdropOverlay },
                }}
            >
                <DialogContent
                    ref={ref}
                    backgroundColor={backgroundColor}
                    showCloseButton={showCloseButton}
                    header={header}
                    onClose={handleClose}
                >
                    {children}
                </DialogContent>
            </Modal>
        );
    }
);

export default Dialog;
