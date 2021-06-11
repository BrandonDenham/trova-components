import React, { useState } from 'react';
import { Colors } from '../../shared/constants/colors';
import { P } from '../typography';
import Button from '../button';
import { ButtonType } from '../button/buttonType';
import { childrenContainer, buttonsContainer } from './dialogStories.styles';

import Dialog from './dialog';

export default {
    title: 'Dialog',
    component: Dialog,
};

export const SingleDialog = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                buttonType={ButtonType.Primary}
                onClick={() => {
                    setOpen(true);
                }}
            >
                Open Dialog
            </Button>

            <Dialog
                open={open}
                onClose={e => {
                    setOpen(false);
                }}
            >
                <div css={childrenContainer()}>
                    <P isBold={false}>
                        Quo usque tandem abutere, Catilina, patientia nostra?
                        Non equidem invideo, miror magis posuere velit aliquet.
                        At nos hinc posthac, sitientis piros Afros.
                    </P>
                    <div css={buttonsContainer()}>
                        <Button buttonType={ButtonType.Secondary}>
                            No, go back
                        </Button>
                        <Button buttonType={ButtonType.Primary}>Yes</Button>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export const DialogWithHeader = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                buttonType={ButtonType.Primary}
                onClick={() => {
                    setOpen(true);
                }}
            >
                Open Dialog
            </Button>

            <Dialog
                header={{
                    title: 'Are you sure want to proceed?',
                    subtitle:
                        'This will remove your booking and your spot will be given to someone else.',
                }}
                open={open}
                onClose={e => {
                    setOpen(false);
                }}
            >
                <div css={childrenContainer()}>
                    <P isBold={false}>
                        Quo usque tandem abutere, Catilina, patientia nostra?
                        Non equidem invideo, miror magis posuere velit aliquet.
                        At nos hinc posthac, sitientis piros Afros.
                    </P>
                    <div css={buttonsContainer()}>
                        <Button buttonType={ButtonType.Secondary}>
                            No, go back
                        </Button>
                        <Button buttonType={ButtonType.Primary}>Yes</Button>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export const DialogWithCustomBackground = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                buttonType={ButtonType.Primary}
                onClick={() => {
                    setOpen(true);
                }}
            >
                Open Dialog
            </Button>

            <Dialog
                backgroundColor={Colors.Teal}
                open={open}
                onClose={e => {
                    setOpen(false);
                }}
            >
                <div css={childrenContainer()}>
                    <P isBold={false}>
                        Quo usque tandem abutere, Catilina, patientia nostra?
                        Non equidem invideo, miror magis posuere velit aliquet.
                        At nos hinc posthac, sitientis piros Afros.
                    </P>
                    <div css={buttonsContainer()}>
                        <Button buttonType={ButtonType.Secondary}>
                            No, go back
                        </Button>
                        <Button buttonType={ButtonType.Primary}>Yes</Button>
                    </div>
                </div>
            </Dialog>
        </>
    );
};
export const DialogWithoutCloseButton = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                buttonType={ButtonType.Primary}
                onClick={() => {
                    setOpen(true);
                }}
            >
                Open Dialog
            </Button>

            <Dialog
                enableBackgroundClick
                showCloseButton={false}
                open={open}
                onClose={e => {
                    setOpen(false);
                }}
            >
                <div css={childrenContainer()}>
                    <P isBold={false}>
                        Quo usque tandem abutere, Catilina, patientia nostra?
                        Non equidem invideo, miror magis posuere velit aliquet.
                        At nos hinc posthac, sitientis piros Afros.
                    </P>
                    <div css={buttonsContainer()}>
                        <Button buttonType={ButtonType.Secondary}>
                            No, go back
                        </Button>
                        <Button buttonType={ButtonType.Primary}>Yes</Button>
                    </div>
                </div>
            </Dialog>
        </>
    );
};
