import { css, Theme } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const mainContainer = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    width: ${theme.columns.twoColumns}px;
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

export const innerContainer = (disabled: boolean | undefined, error: string | string[] | undefined) => css`
    box-sizing: border-box;
    border-radius: 10px;
    ${`background: ${ disabled ? Colors.LightSilver : Colors.White}`};
    border: 1px solid ${Colors.LightGray};
    ${error && error.length && `border-color: ${Colors.Danger};`}
    min-height: 50px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.8rem;
    svg {
        margin-right: 20px;
    }
`;

export const changeButton = () => css`
    cursor: pointer;
    height: 23px;
`;

export const errorSpan = (theme: Theme) => css`
    box-sizing: border-box;
    font-family: ${theme.fonts.robotoBold};
    font-size: ${theme.fontSizes.inputError};
    line-height: 16px;
    padding-top: 9px;
    color: ${Colors.DangerText};
`;

export const input = (theme: Theme) => css`
    box-sizing: border-box;
    font-family: ${theme.fonts.robotoBold};
    font-size: ${theme.fontSizes.number};
    line-height: 19px;
    color: ${Colors.Dark};
    border: transparent;
    background-color: ${Colors.White};
    width: 0;
    flex-grow: 1;
    text-align: center;
    :focus {
        border: transparent;
    }
    :disabled{
        background-color: ${Colors.LightSilver};
        cursor: auto;
    }
`;
