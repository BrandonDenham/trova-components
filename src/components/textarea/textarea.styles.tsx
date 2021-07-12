import { css, Theme } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

import { TextareaSize } from './textareaSize';

export const mainContainer = (theme: Theme, size: TextareaSize) => css`
    display: flex;
    flex-direction: column;
    ${size !== TextareaSize.Flexible &&
    `width: ${theme.columns.fiveColumns}px;`}

    @media (max-width: ${theme.breakpoints.sm}px) {
        width: 100%;
    }
`;

export const textarea = (
    theme: Theme,
    error: string | string[] | undefined,
    size: TextareaSize,
    expandable: boolean
) =>
    css`
        resize: none;
        box-sizing: border-box;
        border-radius: 10px;
        border: 1px solid ${Colors.LightGray};
        min-height: 50px;
        margin-top: 10px;
        padding: 16px 21px;
        font-family: ${theme.fonts.robotoRegular};
        font-size: ${theme.fontSizes.textarea};
        line-height: 19px;
        color: ${Colors.Dark};
        ${expandable && `resize: vertical;`}
        ${size === TextareaSize.Medium && `height:91px;`}
        ${(size === TextareaSize.Large || size === TextareaSize.Flexible) &&
        `height:155px;`}
        @media (max-width: ${theme.breakpoints.sm}px) {
            width: 100%;
        }
        ${!error &&
        `:focus {
        border: 1px solid ${Colors.Active};
        }`}
        :disabled {
            background-color: ${Colors.White};
        }
        ${error && error.length && `border-color: ${Colors.Danger};`}
    `;

export const labelContainer = () => css`
    display: flex;
    justify-content: space-between;
    height: 1rem;
`;

export const labelSpan = (theme: Theme) => css`
    font-family: ${theme.fonts.robotoBold};
    font-size: ${theme.fontSizes.textareaLabel};
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
    font-size: ${theme.fontSizes.textareaDetail};
    line-height: 16px;
    margin-top: 9px;
    color: ${Colors.DarkGray};
`;

export const disabledSpan = (theme: Theme) => css`
    box-sizing: border-box;
    font-family: ${theme.fonts.robotoBold};
    font-size: ${theme.fontSizes.textareaDisabled};
    line-height: 16px;
    padding-top: 9px;
    color: ${Colors.Muted};
`;

export const errorSpan = (theme: Theme) => css`
    box-sizing: border-box;
    font-family: ${theme.fonts.robotoBold};
    font-size: ${theme.fontSizes.textareaError};
    line-height: 16px;
    padding-top: 9px;
    color: ${Colors.DangerText};
`;
