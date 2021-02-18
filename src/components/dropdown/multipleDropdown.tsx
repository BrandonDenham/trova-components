/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React, {
    SyntheticEvent,
    useCallback,
    useState,
    useEffect,
    useRef,
} from 'react';

import {
    mainContainer,
    inputContainerMultipleDropdown,
    inputMultipleDropdown,
    iconContainer,
    buttonsContainer,
    button,
    closeButton,
    loadingIcon,
} from './dropdown.styles';
import { ComponentWidth } from '../input';
import Icon, { IconName, IconSize } from '../icon';
import { Colors } from '../../shared/constants/colors';
import MultipleDropdownProps from './multipleDropdown.types';
import { useOutsideListener } from '../../shared/utils/helpers';
import DropdownHeader from '../__private/dropdownHeader';
import ComponentFooter from '../__private/componentFooter';
import DropdownMenu from '../__private/dropdownMenu';
import imageClose from '../../shared/images/icons/close.svg';
import imageSpinner from '../../shared/images/icons/spinner.svg';

/**
 * Renders a <MultipleDropdown /> component
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
 * @param  props.className - For usage as an emotion styled component.
 */

const MultipleDropdown: React.FC<MultipleDropdownProps> = ({
    value = [''],
    label,
    name,
    info,
    error,
    size = ComponentWidth.Medium,
    disabled = false,
    disabledText,
    placeholder,
    children,
    onSearch,
    searching = false,
    className,
    onChange,
}) => {
    const theme = useTheme();
    const [textValue, setTextValue] = useState('');
    const handleSearch = useCallback(
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

    const removeElement = (elementValue: string) => {
        value = value.filter((item) => item !== elementValue);
        updateButtons();
    };

    const [buttons, setButtons] = useState<(JSX.Element | Element)[]>([]);

    const updateButtons = useCallback(() => {
        let buttonElements: (JSX.Element | Element)[] = [];
        value.forEach((currentValue) => {
            const text = children.filter(
                (item) => item.value === currentValue
            )[0].children;
            buttonElements.push(
                <div key={currentValue} css={button()} data-testid="button">
                    <div>{text}</div>
                    <img
                        alt="Close"
                        src={imageClose}
                        css={closeButton()}
                        onClick={() => removeElement(currentValue)}
                    />
                </div>
            );
        });
        setButtons(buttonElements);
    }, [value]);

    const handleClick = useCallback(
        (event: SyntheticEvent) => {
            const currentValue = (event.target as HTMLLIElement).dataset.value!;
            if (value.includes(currentValue)) {
                value = value.filter((item) => item !== currentValue);
            } else {
                value.push(currentValue);
            }
            updateButtons();
            onChange ? onChange(event, name, value) : event.stopPropagation();
        },
        [value]
    );

    useEffect(() => {
        updateButtons();
    }, []);

    const containerRef = useRef(null);
    useOutsideListener(containerRef, () => setListVisible(false));

    return (
        <div
            css={mainContainer(theme, size)}
            ref={containerRef}
            className={className}
        >
            <DropdownHeader label={label} info={info} />
            <div
                css={inputContainerMultipleDropdown(
                    theme,
                    error,
                    listVisible,
                    size
                )}
            >
                <div css={buttonsContainer(size)}>
                    {buttons}
                    <input
                        data-testid="input"
                        type="text"
                        onChange={handleSearch}
                        value={textValue}
                        disabled={disabled}
                        placeholder={placeholder}
                        css={inputMultipleDropdown(theme)}
                    />
                </div>
                {searching ? (
                    <img alt="Close" src={imageSpinner} css={loadingIcon()} />
                ) : (
                    <div
                        onClick={handleIconClick}
                        css={iconContainer(disabled, size)}
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

export default MultipleDropdown;
