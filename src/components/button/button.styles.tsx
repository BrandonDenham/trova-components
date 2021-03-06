import { css, Theme } from '@emotion/react';

import { ButtonType } from './buttonType';
import { Colors } from '../../shared/constants/colors';
import { ButtonSize } from './buttonSize';

export const button = (
    buttonType: ButtonType,
    selected: boolean,
    disabled: boolean,
    draggable: boolean,
    subtext: string | undefined,
    icon: React.ReactNode,
    size: ButtonSize,
    backgroundColor?: Colors
) => css`
    cursor: pointer;
    ${draggable &&
    `cursor: pointer;
        cursor: grab;
        cursor: -moz-grab;
        cursor: -webkit-grab;
        &:active {
            cursor: grabbing;
            cursor: -moz-grabbing;
            cursor: -webkit-grabbing;
        }
            `}
    border-radius: 14px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 181px;
    min-height: 50px;
    box-sizing: border-box;
    ${icon && `min-width: 202px;`}
    ${subtext &&
    `padding: 21px 0px;
    min-width: 157px;
    `}
    ${size === ButtonSize.Flexible &&
    `   width: 100%;
    `}

    ${buttonType === ButtonType.Primary &&
    !disabled &&
    `background-color: ${backgroundColor ? backgroundColor : Colors.Primary};
    color: ${Colors.White};
    &:hover {
        background-color: ${
            backgroundColor ? backgroundColor : Colors.PrimaryShiny
        };
        opacity: ${backgroundColor ? 0.5 : 1};
    }
     &:active{
        background-color: ${
            backgroundColor ? backgroundColor : Colors.PrimaryShiny
        };
        opacity: ${backgroundColor ? 0.5 : 1};
    }`}

    ${buttonType === ButtonType.Primary &&
    disabled &&
    `background-color: ${
        backgroundColor ? backgroundColor : Colors.LightPrimary
    };
        color: ${Colors.White};
        cursor: auto;
`}

    ${buttonType === ButtonType.Secondary &&
    `background-color: ${Colors.Secondary};
    color: ${Colors.Primary};
    &:hover {
        background-color: ${Colors.DarkSecondary};
    }
     &:active{
        background-color: ${Colors.DarkSecondary};
    }`}
    ${buttonType === ButtonType.Text &&
    `color: ${Colors.DarkGray};
    &:hover {
        color: ${Colors.Dark};
    }
     &:active{
        color: ${Colors.Dark};
    }`}
    ${buttonType === ButtonType.Tertiary && `padding: 10px 27px;`}
    ${buttonType === ButtonType.Tertiary &&
    selected &&
    `background-color: ${Colors.Primary};
    color: ${Colors.White};
    &:hover {
        background-color: ${Colors.PrimaryShiny};
    }
     &:active{
        background-color: ${Colors.PrimaryShiny};
    }`}
    ${buttonType === ButtonType.Tertiary &&
    !selected &&
    `background-color: ${Colors.NavButtonGray};
    color: ${Colors.Dark};
    &:hover {
        background-color: ${Colors.NavButtonDarkGray};
    }`}
    ${buttonType === ButtonType.Tab &&
    selected &&
    `min-height: 42px;
    border-radius: 15px;
    background-color: ${Colors.NavButtonGray};
    color: ${Colors.Dark};
    &:hover {
        background-color: ${Colors.NavButtonDarkGray};
    }
     &:active{
        background-color: ${Colors.NavButtonDarkGray};
    }`}
    ${buttonType === ButtonType.Tab &&
    !selected &&
    `min-height: 42px;
    border-radius: 15px;
    background-color: ${Colors.NavButtonLightGray};
    color: ${Colors.Dark};`}
    ${buttonType === ButtonType.TabCallout &&
    `min-height: 42px;
    border-radius: 15px;
    background-color: ${Colors.Primary};
    color: ${Colors.White};
    &:hover {
        background-color: ${Colors.PrimaryShiny};
    }
     &:active{
        background-color: ${Colors.PrimaryShiny};
    }`}
    ${buttonType === ButtonType.Tab &&
    disabled &&
    `
        cursor: not-allowed;
        background-color: ${Colors.NavButtonExtraLightGray};
        color: ${Colors.LightGray};
    `}
`;

export const buttonText = (
    theme: Theme,
    buttonType: ButtonType,
    subtext: string | undefined,
    size: ButtonSize,
    icon: React.ReactNode
) => css`
    display: flex;
    font-family: ${theme.fonts.robotoBold};
    ${(buttonType === ButtonType.Tab || buttonType === ButtonType.TabCallout) &&
    `font-family: ${theme.fonts.robotoMedium};`}
    font-size: ${theme.fontSizes.buttonText};
    line-height: 18px;
    ${subtext &&
    `font-size: ${theme.fontSizes.buttonTextWithSubtext};
    line-height: 16px;
    align-self:flex-start
    `}

    ${size === ButtonSize.Flexible &&
    `
    justify-content: center;
    align-items: center;
    `}
    ${icon &&
    size !== ButtonSize.Flexible &&
    `justify-content: space-around;
    width: 100%;`}
`;

export const buttonSubtext = (theme: Theme) => css`
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.fontSizes.buttonSubtext};
    line-height: 15px;
`;

export const buttonChildren = () => css`
    align-self: center;
`;

export const iconContainer = (size: ButtonSize) => css`
    ${size === ButtonSize.Flexible &&
    `
    margin-left: 0.8rem;
    `}
`;
