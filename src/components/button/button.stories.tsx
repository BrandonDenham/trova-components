import React from 'react';

import Button from './button';
import { ButtonType } from './buttonType';
import Icon, { IconName, IconSize } from '../icon/';
import { Colors } from '../../shared/constants/colors';
import DraggableContainer from '../draggable/draggableContainer';
import DraggableButton from './draggableButton';
import { ButtonSize } from './buttonSize';

export default {
    title: 'Button',
    component: Button,
};

export const Primary = () => (
    <Button buttonType={ButtonType.Primary}>Text</Button>
);

export const PrimaryDisabled = () => (
    <Button buttonType={ButtonType.Primary} disabled={true}>
        Text
    </Button>
);

export const PrimaryAdd = () => (
    <Button
        buttonType={ButtonType.Primary}
        icon={<Icon name={IconName.Plus} color={Colors.White} />}
    >
        Add new trip
    </Button>
);

export const Secondary = () => (
    <Button buttonType={ButtonType.Secondary}>Text</Button>
);

export const SecondaryAdd = () => (
    <Button
        buttonType={ButtonType.Secondary}
        icon={<Icon name={IconName.Plus} color={Colors.Primary} />}
    >
        Duplicate itinerary
    </Button>
);

export const SecondaryUpload = () => (
    <Button
        buttonType={ButtonType.Secondary}
        icon={
            <Icon
                name={IconName.Upload}
                size={IconSize.Lg}
                color={Colors.Primary}
            />
        }
    >
        Upload photo
    </Button>
);

export const Text = () => <Button buttonType={ButtonType.Text}>Text</Button>;

export const TextAdd = () => (
    <Button
        buttonType={ButtonType.Text}
        icon={<Icon name={IconName.Plus} color={Colors.DarkGray} />}
    >
        Text
    </Button>
);

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

export const TabDisabled = () => (
    <Button buttonType={ButtonType.Tab} disabled={true}>
        Text
    </Button>
);

export const TabCallout = () => (
    <Button buttonType={ButtonType.TabCallout}>Text</Button>
);

export const Purple = () => (
    <Button buttonType={ButtonType.Primary} backgroundColor={Colors.Purple}>
        Text
    </Button>
);

export const Draggable = () => (
    <DraggableContainer>
        <DraggableButton
            dragTargetConfiguration={{ item: { type: `string` } }}
            onCollect={item => item}
            buttonType={ButtonType.Secondary}
        >
            Transfer
        </DraggableButton>
    </DraggableContainer>
);

export const PrimaryFlexible = () => (
    <Button buttonType={ButtonType.Primary} size={ButtonSize.Flexible}>
        Text
    </Button>
);

export const PrimaryAddFlexible = () => (
    <Button
        buttonType={ButtonType.Primary}
        size={ButtonSize.Flexible}
        icon={<Icon name={IconName.Plus} color={Colors.White} />}
    >
        Add new trip
    </Button>
);
