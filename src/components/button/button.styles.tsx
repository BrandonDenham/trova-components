import { css } from '@emotion/core';
import { ButtonType } from '.';
import { Colors } from '../../shared/constants/colors';

export const button = (
    buttonType: ButtonType,
    selected: boolean,
    subtext: string | undefined,
    icon: React.ReactNode
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
    `background-color: ${Colors.Primary};
    color: ${Colors.White};
    &:hover {
        background-color: ${Colors.DarkPrimary};
    }
     &:active{
        background-color: ${Colors.DarkPrimary};
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
    `background-color: ${Colors.Primary};
    color: ${Colors.Dark};
    &:hover {
        background-color: ${Colors.DarkPrimary};
    }`}
    ${buttonType === ButtonType.Tab &&
    selected &&
    `min-height: 42px;
    border-radius: 15px;
    background-color: #CFDCF4;
    color: ${Colors.Dark};
    &:hover {
        background-color: #A9BCE7;
    }
     &:active{
        background-color: #A9BCE7;
    }`}
    ${buttonType === ButtonType.Tab &&
    !selected &&
    `min-height: 42px;
    border-radius: 15px;
    background-color: #E2E9F7;
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

export const buttonText = (subtext: string | undefined) => css`
    display: flex;
    justify-content: space-around;
    font-family: 'Roboto-Bold';
    font-size: 15px;
    line-height: 18px;
    ${subtext &&
    `font-size: 14px;
    line-height: 16px;
    align-self:flex-start
    `}
`;

export const buttonSubtext = () => css`
    font-family: 'Roboto-Regular';
    font-size: 13px;
    line-height: 15px;
`;

export const buttonChildren = () => css`
    align-self: center;
`;
