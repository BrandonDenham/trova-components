import { css, Theme } from '@emotion/react';

import { ComponentWidth } from '../input/';
import { Colors } from '../../shared/constants/colors';

export const list = (theme: Theme, size: ComponentWidth) =>
    css`
        background-color: ${Colors.White};
        border: 1px solid ${Colors.LightGray};
        border-top: 0px;
        font-family: ${theme.fonts.robotoRegular};
        font-size: ${theme.fontSizes.dropdownList};
        line-height: 19px;
        color: ${Colors.Dark};
        padding: 1.2rem 0 1.2rem 1.2rem;
        max-height: 10rem;
        position: absolute;
        top: 76px;
        ${size === ComponentWidth.ExtraSmall && `top: 47px;`}
    `;

export const listItem = () =>
    css`
        cursor: pointer;
        display: table;
        padding: 0.2rem 0;
    `;
