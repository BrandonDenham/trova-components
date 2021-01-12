import { css } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';
import { Theme } from '../theme/theme.types';

export const list = (theme: Theme) =>
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
        overflow: scroll;
    `;

export const listItem = () =>
    css`
        cursor: pointer;
        display: table;
    `;
