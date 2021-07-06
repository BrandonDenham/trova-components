import { css, Theme } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';
import { ComponentWidth } from './componentWidth';

export const mainContainer = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    @media (max-width: ${theme.breakpoints.sm}px) {
        width: 100%;
    }
`;

export const input = (
    theme: Theme,
    error: string | string[] | undefined,
    size: ComponentWidth
) =>
    css`
        box-sizing: border-box;
        border-radius: 10px;
        border: 1px solid ${Colors.LightGray};
        min-height: 50px;
        margin-top: 10px;
        padding-left: 21px;
        font-family: ${theme.fonts.robotoRegular};
        font-size: ${theme.fontSizes.input};
        line-height: 19px;
        background-color: ${Colors.White};
        ${size === ComponentWidth.ExtraSmall &&
        `border-radius: 5px;padding: 5px 9px; width: 100%;font-size: ${theme.fontSizes.extraSmallInput};min-height: 31px;margin-top: 0px;line-height: 16px;`}
        color: ${Colors.Dark};
        ${!error &&
        `:focus {
        border: 1px solid ${Colors.Active};
        }`}
        :disabled {
            background-color: ${Colors.LightSilver};
        }
        ${error && error.length && `border-color: ${Colors.Danger};`}

        ${size === ComponentWidth.ExtraSmall &&
        `min-width: 64px; max-width:100px;`}
        ${size === ComponentWidth.Small &&
        `width:${theme.columns.twoColumns}px;`}
        ${size === ComponentWidth.Medium &&
        `width:${theme.columns.threeColumns}px;`}
        ${size === ComponentWidth.Large &&
        `width:${theme.columns.fourColumns}px;`}
        ${size === ComponentWidth.ExtraLarge &&
        `width:${theme.columns.fiveColumns}px;`}
        ${size === ComponentWidth.Flexible &&
        `   width: 100%;
            `}
        @media (max-width: ${theme.breakpoints.sm}px) {
            width: 100%;
        }
    `;

export const labelContainer = (theme: Theme, size: ComponentWidth) => css`
    display: flex;
    justify-content: space-between;
    height: 1rem;
    ${size === ComponentWidth.ExtraSmall && `min-width: 64px; max-width:100px;`}
    ${size === ComponentWidth.Small && `width:${theme.columns.twoColumns}px;`}
    ${size === ComponentWidth.Medium &&
    `width:${theme.columns.threeColumns}px;`}
    ${size === ComponentWidth.Large && `width:${theme.columns.fourColumns}px;`}
    ${size === ComponentWidth.ExtraLarge &&
    `width:${theme.columns.fiveColumns}px;`}
    ${size === ComponentWidth.Flexible &&
    `   width: 100%;
        `}
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

export const detailSpan = (theme: Theme) => css`
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.fontSizes.inputDetail};
    line-height: 16px;
    margin-top: 9px;
    color: ${Colors.DarkGray};
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
    error: string | string[] | undefined
) => css`
    box-sizing: border-box;
    border-radius: 10px;
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
    background-color: ${Colors.White};
    ${!error &&
    `padding-left: 20px;
    :focus-within {
        border: 1px solid ${Colors.Active};
    }`}
    ${error && error.length && `border-color: ${Colors.Danger};`}
    svg {
        margin-right: 20px;
    }
`;

export const inputWithIcon = (theme: Theme, size: ComponentWidth) => css`
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
