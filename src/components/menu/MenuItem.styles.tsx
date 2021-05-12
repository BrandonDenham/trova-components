import { css, Theme } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const menuItem = (selected: boolean) => css`
    padding: 0.85rem 1rem;
    border-bottom: 1px solid ${Colors.LightSilver};
    cursor: pointer;
    &:hover {
        background-color: ${Colors.LightSilver};
        transition: 0.5s;
    }
    ${selected === true && `background-color: ${Colors.LightSilver};`}
`;

export const menuItemText = (theme: Theme) => css`
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.fontSizes.menuText};
    color: ${Colors.Dark};
`;
