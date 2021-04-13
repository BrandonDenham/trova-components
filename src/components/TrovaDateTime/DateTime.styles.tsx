import { css, Theme } from '@emotion/react';

import { Colors } from '../../shared/constants/colors';
import { ComponentWidth } from '../input';

export const mainContainer = (size: ComponentWidth) => css`
    display: flex;
    flex-direction: column;
    ${size === ComponentWidth.ExtraSmall && `min-width: 64px; max-width:100px;`}
    ${size === ComponentWidth.Small && `width: 157px;`}
    ${size === ComponentWidth.Medium && `width: 250px;`}
    ${size === ComponentWidth.Large && `width: 343px;`}
    ${size === ComponentWidth.ExtraLarge && `width: 436px;`}
    ${size === ComponentWidth.Flexible && `width: 100%;`}
    @media (max-width: 576px) {
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

export const errorSpan = (theme: Theme) => css`
    box-sizing: border-box;
    font-family: ${theme.fonts.robotoBold};
    font-size: ${theme.fontSizes.inputError};
    line-height: 16px;
    padding-top: 9px;
    color: ${Colors.DangerText};
`;

export const detailSpan = (theme: Theme) => css`
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.fontSizes.inputDetail};
    line-height: 16px;
    margin-top: 9px;
    color: ${Colors.DarkGray};
`;

export const disabledSpan = () => css`
    box-sizing: border-box;
    font-size: 14px;
    line-height: 16px;
    padding-top: 9px;
    color: ${Colors.Muted};
`;
