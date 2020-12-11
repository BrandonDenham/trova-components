import { css } from '@emotion/core';
import { Colors } from '../../shared/constants/colors';
import { Theme } from '../theme/theme.types';
import { ComponentWidth } from '../input';

export const mainContainer = (theme: Theme, size: ComponentWidth) => css`
    display: flex;
    flex-direction: column;
    ${size === ComponentWidth.Small && `width:${theme.columns.twoColumns}px;`}
    ${size === ComponentWidth.Medium && `width:${theme.columns.threeColumns}px;`}
    ${size === ComponentWidth.Large && `width:${theme.columns.fourColumns}px;`}
    ${size === ComponentWidth.ExtraLarge && `width:${theme.columns.fiveColumns}px;`}
    @media (max-width: ${theme.breakpoints.sm}px) {
        width: 100%;
    }
`;

export const labelContainer = () => css`
    display: flex;
    justify-content: space-between;
    height: 1rem;
`;

export const labelSpan = (theme: Theme) => css`
    font-family: ${theme.fonts.robotoBold};
    font-size: ${theme.fontSizes.inputLabel};
    line-height: 16px;
    color: ${Colors.DarkGray};
`;

export const infoImageContainer = () => css`
    position: relative;
    input {
        display: none;
    }
    input:checked + span {
        visibility: visible;
        opacity: 1;
    }
`;

export const infoImage = () => css`
    width: 1.2rem;
    height: 1.2rem;
    position: relative;
    display: inline-block;
`;

export const tooltip = (theme: Theme) => css`
    visibility: hidden;
    width: 160px;
    background-color: ${Colors.Dark};
    color: ${Colors.White};
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.fontSizes.tooltip};
    text-align: center;
    padding: 1rem;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    top: 100%;
    right: 25%;
    margin-left: -80px;
    opacity: 0;
    transition: opacity 0.3s;
`;

export const disabledSpan = (theme: Theme) => css`
    box-sizing: border-box;
    font-family: ${theme.fonts.robotoBold};
    font-size: ${theme.fontSizes.inputDisabled};
    line-height: 16px;
    padding-top: 9px;
    color: ${Colors.Muted};
`;

export const errorSpan = (theme: Theme) => css`
    box-sizing: border-box;
    font-family: ${theme.fonts.robotoBold};
    font-size: ${theme.fontSizes.inputError};
    line-height: 16px;
    padding-top: 9px;
    color: ${Colors.DangerText};
`;

export const inputContainer = (
    theme: Theme,
    error: string | string[] | undefined,
    listVisible: boolean
) => css`
    box-sizing: border-box;
    border-radius: 10px;
    ${listVisible && `border-radius: 10px 10px 0px 0px;`}
    border: 1px solid ${Colors.LightGray};
    min-height: 50px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 21px;
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.fontSizes.input};
    line-height: 19px;
    color: ${Colors.Dark};
    ${!error &&
    `padding-left: 20px;
    :focus-within {
        border: 1px solid ${Colors.Active};
    }`}
    ${error && error.length && `border-color: ${Colors.Danger};`}
    :disabled {
        background-color: ${Colors.White};
    }
`;

export const input = (theme: Theme, size: ComponentWidth) => css`
    box-sizing: border-box;
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.fontSizes.input};
    line-height: 19px;
    color: ${Colors.Dark};
    border: transparent;
    :disabled {
        background-color: ${Colors.White};
    }
    :focus {
        border: transparent;
    }
    ${size === ComponentWidth.Small && `width:99px;`}
    ${size === ComponentWidth.Medium && `width:190px;`}
`;

export const inputContainerMultipleDropdown = (
    theme: Theme,
    error: string | string[] | undefined,
    listVisible: boolean,
    size: ComponentWidth
) => css`
    box-sizing: border-box;
    border-radius: 10px;
    ${listVisible && `border-radius: 10px 10px 0px 0px;`}
    border: 1px solid ${Colors.LightGray};
    min-height: 50px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 21px;
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.fontSizes.input};
    line-height: 19px;
    color: ${Colors.Dark};
    ${!error &&
    `padding-left: 20px;
    :focus-within {
        border: 1px solid ${Colors.Active};
    }`}
    ${error && error.length && `border-color: ${Colors.Danger};`}
    :disabled {
        background-color: ${Colors.White};
    }
    ${size === ComponentWidth.Small && `width:159px;`}
    ${size === ComponentWidth.Medium && `width:249px;`}
`;

export const inputMultipleDropdown = (theme: Theme) => css`
    box-sizing: border-box;
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.fontSizes.input};
    line-height: 19px;
    color: ${Colors.Dark};
    border: transparent;
    :disabled {
        background-color: ${Colors.White};
    }
    :focus {
        border: transparent;
    }

    min-width: 95px;
    flex: 1;
    display: block;
    padding-bottom: 5px;
`;

export const buttonsContainer = (size: ComponentWidth) =>
    css`
        display: flex;
        flex: 1 0 auto;
        flex-wrap: wrap;
        padding-top: 5px;
        ${size === ComponentWidth.Small && `max-width:95px;`}
        ${size === ComponentWidth.Medium && `max-width:190px;`}
        ${size === ComponentWidth.Large && `max-width:285px;`}
        ${size === ComponentWidth.ExtraLarge && `max-width:380px;`}
    `;

export const button = () =>
    css`
        background: ${Colors.LightGray};
        padding: 2px;
        margin: 0 5px 5px 0;
        border-radius: 3px;
        display: flex;
    `;

export const closeButton = () => css`
    cursor: pointer;
    width: 0.8rem;
    margin-left: 2px;
`;

export const list = (theme: Theme) =>
    css`
        background-color: ${Colors.White};
        border: 1px solid ${Colors.LightGray};
        border-top: 0px;
        font-family: ${theme.fonts.robotoRegular};
        font-size: ${theme.fontSizes.dropdownList};
        line-height: 19px;
        color: ${Colors.Dark};
        padding: 1.2rem 0 1.2rem 1.2rem;
        max-height: 10rem;
        overflow: scroll;
    `;

export const listItem = () =>
    css`
        cursor: pointer;
        display: table;
    `;

export const iconContainer = (disabled: boolean) => css`
    ${disabled === false && `cursor: pointer;`}
    margin: 17px 20px 0 0;
    flex: none;
    align-self: start;
`;

export const loadingIcon = () => css`
    height: 1rem;
    margin-right: 20px;
`;
