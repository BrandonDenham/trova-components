import { css, Theme } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const mainContainer = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
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

export const innerContainer = (
    theme: Theme,
    disabled: boolean | undefined
) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    align-items: center;
    box-sizing: border-box;
    border-radius: 0.5rem;
    border: 1px solid ${Colors.LightGray};
    ${`background: ${disabled ? Colors.LightSilver : Colors.White}`};
    margin-top: 10px;
    width: ${theme.columns.twoColumns}px;
`;

export const currencyType = (theme: Theme) => css`
    display: flex;
    align-items: center;
    min-height: 50px;
    padding: 0 1rem;
    border-radius: 0.5rem 0 0 0.5rem;
    font-family: ${theme.fonts.robotoRegular};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${Colors.DarkGray};
    text-align: center;
    white-space: nowrap;
    background-color: ${Colors.LightSilver};
`;

export const errorSpan = (theme: Theme) => css`
    box-sizing: border-box;
    font-family: ${theme.fonts.robotoBold};
    font-size: ${theme.fontSizes.inputError};
    line-height: 16px;
    padding-top: 9px;
    color: ${Colors.DangerText};
`;

export const input = (
    theme: Theme,
    error: string | string[] | undefined
) => css`
    box-sizing: border-box;
    min-height: 50px;
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.fontSizes.number};
    line-height: 19px;
    border-radius: 0 0.5rem 0.5rem 0;
    color: ${Colors.Dark};
    border: 1px solid transparent;
    background-color: ${Colors.White};
    width: 0;
    flex-grow: 1;
    text-align: center;
    ${error && error.length && `border-color: ${Colors.Danger};`}
    :focus {
        border: transparent;
    }
    :disabled {
        background-color: ${Colors.LightSilver};
        cursor: auto;
    }
`;

export const detailSpan = (theme: Theme) => css`
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.fontSizes.inputDetail};
    line-height: 16px;
    margin-top: 9px;
    color: ${Colors.DarkGray};
`;
