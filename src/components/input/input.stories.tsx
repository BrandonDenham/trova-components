import React from 'react';
import { Colors } from '../../shared/constants/colors';
import Icon, { IconName } from '../icon';

import Input from './input';
import { ComponentWidth } from './componentWidth';

export default {
    title: 'Input',
    component: Input,
};

export const ExtraSmallInput = () => (
    <Input
        name="test"
        value="Text"
        placeholder="Placeholder"
        size={ComponentWidth.ExtraSmall}
    />
);

export const SmallInput = () => (
    <Input
        name="test"
        value="Text"
        placeholder="Placeholder"
        label="Form header"
        detail="Describe the trip in 2-3 sentences."
        size={ComponentWidth.Small}
    />
);

export const MediumInput = () => (
    <Input
        name="test"
        value="Text"
        placeholder="Placeholder"
        label="Form header"
        detail="Describe the trip in 2-3 sentences."
    />
);

export const LargeInput = () => (
    <Input
        name="test"
        value="Text"
        placeholder="Placeholder"
        label="Form header"
        detail="Describe the trip in 2-3 sentences."
        size={ComponentWidth.Large}
    />
);

export const ExtraLargeInput = () => (
    <Input
        name="test"
        value="Text"
        placeholder="Placeholder"
        label="Form header"
        detail="Describe the trip in 2-3 sentences."
        size={ComponentWidth.ExtraLarge}
    />
);

export const DisabledInput = () => (
    <Input
        name="test"
        value="Text"
        placeholder="Placeholder"
        label="Form header"
        detail="Describe the trip in 2-3 sentences."
        disabled={true}
        disabledText="This cannot be updated."
    />
);

export const Info = () => (
    <Input
        name="test"
        value="Sunrise Highrise"
        placeholder="Placeholder"
        label="Form header"
        detail="Describe the trip in 2-3 sentences."
        info="This is actually a really really long tooltip to be used as an example."
        size={ComponentWidth.Medium}
    />
);

export const FilledSearch = () => (
    <Input
        name="test"
        value="Sunrise Highrise"
        placeholder="Placeholder"
        label="Form header"
        detail="Describe the trip in 2-3 sentences."
        size={ComponentWidth.Large}
        icon={<Icon name={IconName.Search} color={Colors.Primary} />}
    />
);

export const SingleError = () => (
    <Input
        name="test"
        value="Text"
        error="Input must be filled"
        placeholder="Placeholder"
        label="Form header"
    />
);

export const MultipleErrors = () => (
    <Input
        name="test"
        value="Text"
        error={['Input must be filled', 'Input must be numeric']}
        placeholder="Placeholder"
        label="Form header"
    />
);

export const FilledSearchErrors = () => (
    <Input
        name="test"
        value="Sunrise Highrise"
        placeholder="Placeholder"
        label="Form header"
        detail="Describe the trip in 2-3 sentences."
        size={ComponentWidth.Large}
        icon={<Icon name={IconName.Search} color={Colors.Primary} />}
        error={['Input must be filled', 'Input must be numeric']}
    />
);

export const InfoFilledSearchErrors = () => (
    <Input
        name="test"
        value="Sunrise Highrise"
        placeholder="Placeholder"
        label="Form header"
        detail="Describe the trip in 2-3 sentences."
        size={ComponentWidth.Large}
        icon={<Icon name={IconName.Search} color={Colors.Primary} />}
        error={['Input must be filled', 'Input must be numeric']}
        info="This is actually a really really long tooltip to be used as an example."
    />
);
