import { css } from '@emotion/core';
import { ButtonType } from '.';
import { Theme } from '../Theme/Theme.types';

export const button = (
    theme: Theme,
    buttonType: ButtonType,
    selected: boolean,
    subtext: string | undefined
) => css`
    cursor: pointer;
    border-radius: 14px;
    display: inline-flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 16px 0px;
    min-width: 181px;
    box-sizing: border-box;
    ${subtext &&
    `padding: 21px 0px;
    min-width: 157px;
    `}
    ${buttonType === ButtonType.Primary &&
    `background-color: ${theme.colors.primary};
    color: white;
    &:hover {
        background-color: ${theme.colors.primaryHover};
    }
     &:active{
        background-color: ${theme.colors.primaryHover};
    }`}
    ${buttonType === ButtonType.Secondary &&
    `background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    &:hover {
        background-color: ${theme.colors.secondaryHover};
    }
     &:active{
        background-color: ${theme.colors.secondaryHover};
    }`}
    ${buttonType === ButtonType.Text &&
    `color: ${theme.colors.darkGray};
    &:hover {
        color: ${theme.colors.dark};
    }
     &:active{
        color: ${theme.colors.dark};
    }`}
    ${buttonType === ButtonType.Tertiary && `padding: 10px 27px;`}
    ${buttonType === ButtonType.Tertiary &&
    selected &&
    `background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    &:hover {
        background-color: ${theme.colors.primaryHover};
    }
     &:active{
        background-color: ${theme.colors.primaryHover};
    }`}
    ${buttonType === ButtonType.Tertiary &&
    !selected &&
    `background-color: ${theme.colors.primary};
    color: ${theme.colors.dark};
    &:hover {
        background-color: ${theme.colors.primaryHover};
    }`}
    ${buttonType === ButtonType.Tab &&
    selected &&
    `padding: 13px 0px;
    border-radius: 15px;
    background-color: ${theme.colors.lightGray};
    color: ${theme.colors.dark};
    &:hover {
        background-color: ${theme.colors.gray};
    }
     &:active{
        background-color: ${theme.colors.gray};
    }`}
    ${buttonType === ButtonType.Tab &&
    !selected &&
    `padding: 13px 0px;
    border-radius: 15px;
    background-color: ${theme.colors.lightGray};
    color: ${theme.colors.dark};
    &:hover {
        background-color: ${theme.colors.gray};
    }
     &:active{
        background-color: ${theme.colors.gray};
    }`}
`;

export const buttonText = (theme: Theme, buttonType: ButtonType, subtext:string|undefined) => css`
    display: flex;
    font-family: 'Roboto-Bold';
    font-size: 15px;
    line-height: 18px;
    ${subtext &&
    `font-size: 14px;
    line-height: 16px;
    align-self:flex-start
    `}
`;

export const buttonSubtext = (theme: Theme, buttonType: ButtonType) => css`
    font-family: 'Roboto-Regular';
    font-size: 13px;
    line-height: 15px;
`;
