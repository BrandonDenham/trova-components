import React from 'react';

import Button from './Button';
import { ButtonType } from './ButtonType';

export default {
    title: 'Button',
    component: Button,
};

export const Primary = () => (
    <Button buttonType={ButtonType.Primary}>Text</Button>
);

export const Secondary = () => (
    <Button buttonType={ButtonType.Secondary}>Text</Button>
);

export const Text = () => <Button buttonType={ButtonType.Text}>Text</Button>;

export const TertiarySelected = () => (
    <Button
        buttonType={ButtonType.Tertiary}
        selected={true}
        subtext="Weekday, Mon XX"
    >
        Day X
    </Button>
);

export const TertiaryUnselected = () => (
    <Button buttonType={ButtonType.Tertiary} subtext="Weekday, Mon XX">
        Day X
    </Button>
);

export const TabSelected = () => (
    <Button buttonType={ButtonType.Tab} selected={true}>
        Text
    </Button>
);

export const TabUnselected = () => (
    <Button buttonType={ButtonType.Tab}>Text</Button>
);

export const TabCallout = () => (
    <Button buttonType={ButtonType.TabCallout}>Text</Button>
);
