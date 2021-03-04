import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import Button from './button';
import { ButtonType } from './buttonType';
import { Colors } from '../../shared/constants/colors';

export const button = (
    buttonType: ButtonType,
    selected: boolean,
    subtext: string | undefined,
    icon: React.ReactNode,
    backgroundColor?: Colors
) => css`
    cursor: pointer;
    border-radius: 14px;
    display: inline-flex;
    justify-content: center;
    flex-direction: column;
    min-width: 181px;
    min-height: 50px;
    box-sizing: border-box;
    ${icon && `min-width: 202px;`}
    ${subtext &&
    `padding: 21px 0px;
    min-width: 157px;
    `}
    ${buttonType === ButtonType.Primary &&
    `background-color: ${backgroundColor ? backgroundColor : Colors.Primary};
    color: ${Colors.White};
    &:hover {
        background-color: ${
            backgroundColor ? backgroundColor : Colors.DarkPrimary
        };
        opacity: ${backgroundColor ? 0.5 : 1};
    }
     &:active{
        background-color: ${
            backgroundColor ? backgroundColor : Colors.DarkPrimary
        };
        opacity: ${backgroundColor ? 0.5 : 1};
    }`}
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
        background-color: ${Colors.DarkPrimary};
    }
     &:active{
        background-color: ${Colors.DarkPrimary};
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
        background-color: ${Colors.DarkPrimary};
    }
     &:active{
        background-color: ${Colors.DarkPrimary};
    }`}
`;

export const buttonText = (
    theme: Theme,
    buttonType: ButtonType,
    subtext: string | undefined
) => css`
    display: flex;
    justify-content: space-around;
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
`;

export const buttonSubtext = (theme: Theme) => css`
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.fontSizes.buttonSubtext};
    line-height: 15px;
`;

export const buttonChildren = () => css`
    align-self: center;
`;

export const StyledDraggableButton = styled(Button)`
    cursor: ${props => (props.theme as Theme).cursor.grab};
    cursor: ${props =>
        (props.theme as Theme).cursor
            .webkitGrabbing}; /* fallback if grab cursor is unsupported (chrome) */
`;
