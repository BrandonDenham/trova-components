/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, {
    SyntheticEvent,
    useCallback,
    useState,
    useEffect,
    useRef,
} from 'react';
import { useTheme } from 'emotion-theming';

import { Theme } from '../theme/theme.types';
import {
    mainContainer,
    labelContainer,
    errorSpan,
    labelSpan,
    infoImage,
    infoImageContainer,
    disabledSpan,
    inputContainerMultipleDropdown,
    inputMultipleDropdown,
    tooltip,
    list,
    listItem,
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
const imageClose = require('../../shared/images/icons/close.svg') as string;
const imageInfo = require('../../shared/images/icons/info.svg') as string;
const imageSpinner = require('../../shared/images/icons/spinner.svg') as string;

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
}) => {
    const theme = useTheme<Theme>();
    const [textValue, setTextValue] = useState('');
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

    const handleLiClick = useCallback(
        (event: SyntheticEvent) => {
            const currentValue = (event.target as HTMLLIElement).dataset.value!;
            if (value.includes(currentValue)) {
                value = value.filter((item) => item !== currentValue);
            } else {
                value.push(currentValue);
            }
            updateButtons();
        },
        [value]
    );

    useEffect(() => {
        updateButtons();
    }, []);

    const containerRef = useRef(null);
    useOutsideListener(containerRef, () => setListVisible(false));

    return (
        <div css={mainContainer(theme, size)} ref={containerRef}>
            <div css={labelContainer()}>
                {label && <span css={labelSpan(theme)}>{label}</span>}
                {info && (
                    <div css={infoImageContainer()} title={info}>
                        <label>
                            <img
                                css={infoImage()}
                                alt="Info."
                                src={imageInfo}
                            />
                            <input type="checkbox"></input>
                            <span css={tooltip(theme)}>{info}</span>
                        </label>
                    </div>
                )}
            </div>
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
                        onChange={handleChange}
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
            {listVisible && !searching && (
                <ul css={list(theme)}>
                    {children.map((child) => (
                        <li
                            css={listItem()}
                            onClick={handleLiClick}
                            data-value={child.value as string}
                            key={child.value}
                        >
                            {child.children}
                        </li>
                    ))}
                </ul>
            )}
            {disabled && disabledText && (
                <span css={disabledSpan(theme)}>{disabledText}</span>
            )}
            {error && typeof error === 'string' && (
                <span css={errorSpan(theme)}>{error}</span>
            )}
            {error && Array.isArray(error) && (
                <span css={errorSpan(theme)}>
                    {error.reduce((a: string, b: string) => {
                        return a.concat(', ').concat(b);
                    })}
                </span>
            )}
        </div>
    );
};

export default MultipleDropdown;
