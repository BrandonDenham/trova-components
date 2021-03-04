import { css, Theme } from '@emotion/react';

import { ComponentWidth } from '../input/';
import { Colors } from '../../shared/constants/colors';

export const list = (theme: Theme, size: ComponentWidth, label: string | undefined) =>
    css`
        background-color: ${Colors.White};
        border: 1px solid ${Colors.LightGray};
        border-top: 0px;
        font-family: ${theme.fonts.robotoRegular};
        font-size: ${theme.fontSizes.dropdownList};
        line-height: 19px;
        color: ${Colors.Dark};
        padding: 1.2rem 0 1.2rem 0rem;
        max-height: 10rem;
        overflow: auto;
        position: absolute;
        width: 100%;
        z-index: 1;
        ${!label && `top: 50px;`}
        ${label && `top: 76px;`}
        ${size === ComponentWidth.ExtraSmall && label && `top: 57px;`}
        ${size === ComponentWidth.ExtraSmall && !label && `top: 31px;`}
    `;

export const listItem = () =>
    css`
        cursor: pointer;
        padding: 0.2rem 0 0 1.2rem;
        :hover {
            background-color: ${Colors.NavButtonLightGray};
        }
    `;

export const listItemMultipleDropdown = () =>
    css`
        padding: 0.2rem 0 0 0.8rem;
        display: flex;
    `;

export const checkboxMultipleDropdown = () =>
    css`
        padding-right: 0.3rem;
    `;

export const childrenMultipleDropdown = () =>
    css`
        padding-top: 0.2rem;
    `;
