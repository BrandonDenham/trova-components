import { css, Theme } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

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
export const infoImage = () => css`
    width: 1.2rem;
    height: 1.2rem;
    position: relative;
    display: inline-block;
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
