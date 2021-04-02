import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import Dropdown from './dropdown';
import MultipleDropdown from './multipleDropdown';
import { ComponentWidth } from '../input/';
import Option from './option.types';

export default {
    title: 'Dropdown',
    component: Dropdown,
};

const children: Option[] = [
    { value: 'value1', children: 'Element 1' },
    { value: 'value2', children: 'Element 2' },
    { value: 'value3', children: 'Element 3' },
    { value: 'value4', children: 'Element 4' },
    { value: 'value5', children: 'Element 5' },
    { value: 'value6', children: 'Element 6' },
    { value: 'value7', children: 'Element 7' },
    { value: 'value8', children: 'Element 8' },
    { value: 'value9', children: 'Element 9' },
    { value: 'value10', children: 'Element 10' },
    { value: 'value11', children: 'Element 11' },
    { value: 'value12', children: 'Element 12' },
    { value: 'value13', children: 'Element 13' },
    { value: 'value14', children: 'Element 14' },
    { value: 'value15', children: 'Element 15' },
];

const daysOfTheWeek: Option[] = [
    { value: 'monday', children: 'M' },
    { value: 'tuesday', children: 'Tu' },
    { value: 'wednesday', children: 'W' },
    { value: 'thursday', children: 'Th' },
    { value: 'friday', children: 'F' },
    { value: 'saturday', children: 'Sa' },
    { value: 'sunday', children: 'Su' },
];

export const SearchableDropdown = () => {
    const [limitedOptions, setLimitedOptions] = useState<Option[]>(daysOfTheWeek);
    const onSearch = (event, name, searchValue: string) => {
        const newLimitedOptions = daysOfTheWeek.filter(({value}) => {
            return value.includes(searchValue);
        });
        setLimitedOptions(newLimitedOptions);
    };
    const [dropDownValue, setValue] = useState<string>(``);

    return <Dropdown
        name="test"
        value={dropDownValue}
        onChange={(event, name, eventValue = ``) => {
            setValue(eventValue);
        }}
        placeholder="Placeholder"
        label="Form header"
        size={ComponentWidth.Medium}
        children={limitedOptions}
        onSearch={onSearch}
    />;
};

export const ExtraSmallDropdown = () => (
    <Dropdown
        name="test"
        value="asd"
        placeholder="Placeholder"
        size={ComponentWidth.ExtraSmall}
        children={daysOfTheWeek}
        onSearch={action('search')}
    />
);

export const SmallDropdown = () => (
    <Dropdown
        name="test"
        value="asd"
        placeholder="Placeholder"
        label="Form header"
        size={ComponentWidth.Small}
        children={children}
        onSearch={action('search')}
    />
);

export const MediumDropdown = () => (
    <Dropdown
        name="test"
        value="value1"
        placeholder="Placeholder"
        label="Form header"
        size={ComponentWidth.Medium}
        children={children}
        onSearch={action('search')}
    />
);

export const LargeDropdown = () => {
    const [stateValue, setStateValue] = useState('value1');
    return (
        <Dropdown
            name="test"
            value={stateValue}
            placeholder="Placeholder"
            label="Form header"
            size={ComponentWidth.Large}
            children={children}
            onSearch={action('search')}
            onChange={(e, name, eventValue) => {
                setStateValue(eventValue);
                return e;
            }}
        />
    );
};

export const ExtraLargeDropdown = () => (
    <Dropdown
        name="test"
        value="value1"
        placeholder="Placeholder"
        label="Form header"
        size={ComponentWidth.ExtraLarge}
        children={children}
        onSearch={action('search')}
    />
);

export const FlexibleDropdown = () => (
    <Dropdown
        name="test"
        value="value1"
        placeholder="Placeholder"
        label="Form header"
        children={children}
        onSearch={action('search')}
    />
);

export const SearchingDropdown = () => (
    <Dropdown
        name="test"
        value="value1"
        placeholder="Placeholder"
        label="Form header"
        children={children}
        onSearch={action('search')}
        searching={true}
    />
);

export const EmptyDropdown = () => (
    <Dropdown
        name="test"
        value="value1"
        placeholder="Placeholder"
        label="Form header"
        children={children}
        onSearch={action('search')}
    />
);

export const DisabledDropdown = () => (
    <Dropdown
        name="test"
        value="value1"
        placeholder="Placeholder"
        label="Form header"
        disabled={true}
        disabledText="This cannot be updated."
        children={children}
        onSearch={action('search')}
    />
);

export const Info = () => (
    <Dropdown
        name="test"
        value="value1"
        placeholder="Placeholder"
        label="Form header"
        info="This is actually a really really long tooltip to be used as an example."
        size={ComponentWidth.Medium}
        children={children}
        onSearch={action('search')}
    />
);

export const SingleError = () => (
    <Dropdown
        name="test"
        value="value1"
        error="Input must be filled"
        placeholder="Placeholder"
        label="Form header"
        children={children}
        onSearch={action('search')}
    />
);

export const MultipleErrors = () => (
    <Dropdown
        name="test"
        value="value1"
        error={['Input must be filled', 'Input must be numeric']}
        placeholder="Placeholder"
        label="Form header"
        children={children}
        onSearch={action('search')}
    />
);

export const FilledSearchErrors = () => (
    <Dropdown
        name="test"
        value="value1"
        placeholder="Placeholder"
        label="Form header"
        size={ComponentWidth.Large}
        error={['Input must be filled', 'Input must be numeric']}
        children={children}
        onSearch={action('search')}
    />
);

export const InfoFilledSearchErrors = () => (
    <Dropdown
        name="test"
        value="value1"
        placeholder="Placeholder"
        label="Form header"
        size={ComponentWidth.Large}
        error={['Input must be filled', 'Input must be numeric']}
        info="This is actually a really really long tooltip to be used as an example."
        children={children}
        onSearch={action('search')}
    />
);

export const ExtraSmallMultipleDropdown = () => {
    const [stateValue, setStateValue] = useState([
        'value1',
        'value3',
        'value6',
    ]);
    return (
        <MultipleDropdown
            name="test"
            value={stateValue}
            children={daysOfTheWeek}
            onSearch={action('search')}
            size={ComponentWidth.ExtraSmall}
            placeholder="Placeholder"
            onChange={(e, name, eventValue) => {
                setStateValue(eventValue);
                return e;
            }}
        />
    );
};

export const SmallMediumDropdown = () => {
    const [stateValue, setStateValue] = useState([
        'value1',
        'value3',
        'value6',
    ]);
    return (
        <MultipleDropdown
            name="test"
            value={stateValue}
            label="Form header"
            children={children}
            onSearch={action('search')}
            size={ComponentWidth.Small}
            placeholder="Placeholder"
            onChange={(e, name, eventValue) => {
                setStateValue(eventValue);
                return e;
            }}
        />
    );
};

export const MediumMultipleDropdown = () => {
    const [stateValue, setStateValue] = useState([
        'value1',
        'value3',
        'value6',
    ]);
    return (
        <MultipleDropdown
            name="test"
            value={stateValue}
            label="Form header"
            children={children}
            onSearch={action('search')}
            placeholder="Placeholder"
            onChange={(e, name, eventValue) => {
                setStateValue(eventValue);
                return e;
            }}
        />
    );
};

export const LargeMultipleDropdown = () => {
    const [stateValue, setStateValue] = useState([
        'value1',
        'value3',
        'value6',
    ]);
    return (
        <MultipleDropdown
            name="test"
            value={stateValue}
            label="Form header"
            children={children}
            onSearch={action('search')}
            size={ComponentWidth.Large}
            placeholder="Placeholder"
            onChange={(e, name, eventValue) => {
                setStateValue(eventValue);
                return e;
            }}
        />
    );
};

export const ExtralargeMultipleDropdown = () => {
    const [stateValue, setStateValue] = useState([
        'value1',
        'value3',
        'value6',
    ]);
    return (
        <MultipleDropdown
            name="test"
            value={stateValue}
            label="Form header"
            children={children}
            onSearch={action('search')}
            size={ComponentWidth.ExtraLarge}
            placeholder="Placeholder"
            onChange={(e, name, eventValue) => {
                setStateValue(eventValue);
                return e;
            }}
        />
    );
};

export const FlexibleMultipleDropdown = () => {
    const [stateValue, setStateValue] = useState([
        'value1',
        'value3',
        'value6',
    ]);
    return (
        <MultipleDropdown
            name="test"
            value={stateValue}
            label="Form header"
            children={children}
            onSearch={action('search')}
            placeholder="Placeholder"
            onChange={(e, name, eventValue) => {
                setStateValue(eventValue);
                return e;
            }}
        />
    );
};

export const SearchingMultipleDropdown = () => {
    const [stateValue, setStateValue] = useState([
        'value1',
        'value3',
        'value6',
    ]);
    return (
        <MultipleDropdown
            name="test"
            value={stateValue}
            label="Form header"
            children={children}
            onSearch={action('search')}
            placeholder="Placeholder"
            searching={true}
            onChange={(e, name, eventValue) => {
                setStateValue(eventValue);
                return e;
            }}
        />
    );
};
