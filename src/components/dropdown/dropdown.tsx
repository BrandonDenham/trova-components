/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React, { SyntheticEvent, useCallback, useState, useRef, useEffect } from 'react';

import {
    mainContainer,
    inputContainer,
    input,
    iconContainer,
    loadingIcon,
} from './dropdown.styles';
import { ComponentWidth } from '../input/';
import Icon, { IconName, IconSize } from '../icon';
import { Colors } from '../../shared/constants/colors';
import DropdownProps from './dropdown.types';
import { useOutsideListener } from '../../shared/utils/helpers';
import DropdownHeader from '../__private/dropdownHeader';
import ComponentFooter from '../__private/componentFooter';
import DropdownMenu from '../__private/dropdownMenu';
import imageSpinner from '../../shared/images/icons/spinner.svg';
import Option from '../option/option.types';

const getSelectedValue = (children: Option[], value: string) => {
    const childValue =
        children && children.find(child => child.value === value);
    return childValue ? childValue.children : '';
};

/**
 * Renders a <Dropdown /> component
 * @param  props
 * @param  props.value - The value of the dropdown as stored in the form
 * @param  props.label - a label if it exists for the field
 * @param  props.name - field Name, will correspond to the 2nd parameter in the onSearch
 * @param  props.info - this be the next for an onClick/hover icon.  If null icon doesnt show
 * @param  props.error - any errors
 * @param  props.placeholder - This is the standard placeholder text for an empty dropdown
 * @param  props.size - The sizes are: ExtraSmall: for usage in tables, Small - 2 col, Medium - 3 col (default), Large - 4 col, ExtraLarge - 5 col
 * @param  props.disabled - defaults to false, if true there is no ability to click into the input
 * @param  props.disabledText - Text under the input that will be shown if disabled is true
 * @param  props.children - The options that are possible, that provide the list of what's available in the dropdown.
 * @param  props.onSearch - A function that takes the value of the event fieldName, and value of the search input if the user starts typing.
 * @param  props.searching - This will be a prop to declare if something is being searched, if true, a loading indicator should be shown in the menu
 * @param  props.className - For usage as an emotion styled component.
 */

const Dropdown: React.FC<DropdownProps> = ({
    value = '',
    label,
    name,
    info,
    error,
    placeholder,
    size = ComponentWidth.Flexible,
    disabled = false,
    disabledText,
    children,
    onSearch,
    searching = false,
    className,
    onChange,
}) => {
    const theme = useTheme();

    const [searchValue, setSearchValue] = useState(getSelectedValue(children, value));
    const handleSearch = useCallback(
        (event: SyntheticEvent) => {
            const eventValue : string = (event.target as HTMLInputElement).value;
            setSearchValue(eventValue);
            onSearch
                ? onSearch(
                      event,
                      name,
                      eventValue
                  )
                : event.stopPropagation();
        },
        [name, onSearch]
    );
    useEffect(() => {
        const newSearchValue : string = getSelectedValue(children, value);
        if (newSearchValue !== searchValue) {
            setSearchValue(newSearchValue);
        }
    }, [value]);


    const [listVisible, setListVisible] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const handleContainerClick = useCallback(() => {
        if (!disabled) {
            setListVisible(!listVisible);
            inputRef.current?.focus();
        }
    }, [listVisible]);
    const handleClick = useCallback(
        (event: SyntheticEvent) => {
            value = (event.target as HTMLLIElement).dataset.value!;
            setListVisible(false);
            onChange ? onChange(event, name, value) : event.stopPropagation();
        },
        [value]
    );

    const containerRef = useRef<HTMLDivElement>(null);

    useOutsideListener(containerRef, () => setListVisible(false));

    return (
        <div
            css={mainContainer(theme, size)}
            ref={containerRef}
            className={className}
        >
            {label && <DropdownHeader label={label} info={info} />}
            <div
                css={inputContainer(theme, error, listVisible, size, disabled)}
                onClick={handleContainerClick}
            >
                <input
                    ref={inputRef}
                    data-testid="input"
                    type="search"
                    autoComplete="off"
                    onChange={handleSearch}
                    placeholder={placeholder}
                    value={searchValue}
                    disabled={disabled}
                    css={input(theme, size)}
                    name={name}
                />
                {searching ? (
                    <img alt="Close" src={imageSpinner} css={loadingIcon()} />
                ) : (
                    <div css={iconContainer(disabled, size, false)}>
                        <Icon
                            name={IconName.DropdownArrow}
                            color={Colors.Primary}
                            size={IconSize.Md}
                        />
                    </div>
                )}
            </div>
            <DropdownMenu
                children={children}
                searching={searching}
                listVisible={listVisible}
                handleClick={handleClick}
                size={size}
                label={label}
            />
            <ComponentFooter
                disabled={disabled}
                disabledText={disabledText}
                error={error}
            />
        </div>
    );
};

export default Dropdown;
