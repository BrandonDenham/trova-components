/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { SyntheticEvent, useCallback, useState, useRef } from 'react';
import { useTheme } from 'emotion-theming';

import { Theme } from '../theme/theme.types';
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
const imageSpinner = require('../../shared/images/icons/spinner.svg') as string;

/**
 * Renders a <Dropdown /> component
 * @param  props
 * @param  props.value - The value of the dropdown as stored in the form
 * @param  props.label - a label if it exists for the field
 * @param  props.name - field Name, will correspond to the 2nd parameter in the onSearch
 * @param  props.info - this be the next for an onClick/hover icon.  If null icon doesnt show
 * @param  props.error - any errors
 * @param  props.placeholder - This is the standard placeholder text for an empty dropdown
 * @param  props.size - The sizes are: Small - 2 col, Medium - 3 col (default), Large - 4 col, ExtraLarge - 5 col
 * @param  props.disabled - defaults to false, if true there is no ability to click into the input
 * @param  props.disabledText - Text under the input that will be shown if disabled is true
 * @param  props.children - The options that are possible, that provide the list of what's available in the dropdown.
 * @param  props.onSearch - A function that takes the value of the event fieldName, and value of the search input if the user starts typing.
 * @param  props.searching - This will be a prop to declare if something is being searched, if true, a loading indicator should be shown in the menu
 */

const Dropdown: React.FC<DropdownProps> = ({
    value = '',
    label,
    name,
    info,
    error,
    placeholder,
    size = ComponentWidth.Medium,
    disabled = false,
    disabledText,
    children,
    onSearch,
    searching = false,
}) => {
    const theme = useTheme<Theme>();
    const [textValue, setTextValue] = useState(value);
    const handleChange = useCallback(
        (event: SyntheticEvent) => {
            onSearch
                ? onSearch(
                      event,
                      name,
                      (event.target as HTMLInputElement).value
                  )
                : event.stopPropagation();
            setTextValue((event.target as HTMLInputElement).value);
        },
        [name, textValue, onSearch]
    );
    const [listVisible, setListVisible] = useState(false);
    const handleIconClick = useCallback(() => {
        if (!disabled) {
            setListVisible(!listVisible);
        }
    }, [listVisible]);
    const handleClick = useCallback(
        (event: SyntheticEvent) => {
            setTextValue((event.target as HTMLLIElement).textContent!);
            value = children[(event.target as HTMLLIElement).value].value;
            setListVisible(false);
        },
        [textValue]
    );
    const containerRef = useRef(null);
    useOutsideListener(containerRef, () => setListVisible(false));
    return (
        <div css={mainContainer(theme, size)} ref={containerRef}>
            <DropdownHeader label={label} info={info} />
            <div css={inputContainer(theme, error, listVisible)}>
                <input
                    data-testid="input"
                    type="text"
                    onChange={handleChange}
                    placeholder={placeholder}
                    value={textValue}
                    disabled={disabled}
                    css={input(theme, size)}
                />
                {searching ? (
                    <img alt="Close" src={imageSpinner} css={loadingIcon()} />
                ) : (
                    <div
                        onClick={handleIconClick}
                        css={iconContainer(disabled)}
                    >
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