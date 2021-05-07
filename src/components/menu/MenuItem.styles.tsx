import { css, Theme } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const menuItem = (selected: boolean) => css`
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #eff1f7;
    cursor: pointer;
    &:hover {
        background-color: #eff1f7;
        transition: 0.5s;
    }
    ${selected === true && `background-color: #eff1f7;`}
`;

export const menuItemTitle = (theme: Theme) => css`
    font-family: ${theme.fonts.robotoRegular};
    font-size: 14px;
    line-height: 18px;
    color: ${Colors.Dark};
`;
