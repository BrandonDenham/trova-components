import { css } from '@emotion/core';
import { Colors } from '../../shared/constants/colors';
import { Theme } from '../theme/theme.types';

export const mainContainer = (error: string | string[] | undefined) => css`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 20px;
    border-radius: 4px;
    ${error && error.length && `border: 1px solid ${Colors.Danger};`}
`;

export const input = () =>
    css`
        opacity: 0;
        width: 0;
        height: 0;
        :disabled {
            background-color: ${Colors.White};
        }
    `;

export const detailSpan = (theme: Theme) => css`
    box-sizing: border-box;
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.fontSizes.toggleDetail};
    line-height: 21px;
    color: ${Colors.Dark};
    padding-left: 0.8rem;
    vertical-align: top;
`;

export const slider = (error: string | string[] | undefined) => css`
    &:before {
        position: absolute;
        content: '';
        height: 24px;
        width: 24px;
        bottom: -2px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 4px;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
        ${error &&
        error.length &&
        `border: 1px solid ${Colors.Danger};
         left: -1px;
         bottom: -3px;`}
    }
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 4px;
    background-color: ${Colors.LightGray};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    
    input:checked + & {
        background: ${Colors.Success};
    }

    input:focus + & {
        box-shadow: 0 0 1px #2196f3;
    }

    input:checked + &:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    input:disabled + & {
        cursor: default;
    }
`;
