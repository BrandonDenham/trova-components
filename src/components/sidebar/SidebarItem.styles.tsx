import { css, Theme } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const sidebarItem = (theme: Theme, selected: boolean) => css`
    background-color: white;
    border-radius: 13px;
    font-family: ${theme.fonts.robotoBold};
    padding: 0.5rem 1rem;
    cursor: pointer;
    &:hover {
        background-color: #eff1f7;
        transition: 0.5s;
    }
    margin: 0.5rem 0rem;
    &:last-child {
        margin: 0.5rem 0 2rem 0;
    }
    ${selected === true && `background-color: #eff1f7;`}
`;
export const sidebarItemTitle = () => css`
    font-size: 14px;
    line-height: 18px;
    margin: 0px;
    color: ${Colors.Dark};
`;
export const sidebarItemSubtitle = (theme: Theme) => css`
    font-family: ${theme.fonts.robotoRegular};
    font-size: 12px;
    line-height: 14px;
    color: #626c79;
    letter-spacing: 0.3px;
    padding-top: 0.2rem;
`;
export const sidebarItemStatusText = (
    theme: Theme,
    statusTextColor: string | undefined
) => css`
    font-family: ${theme.fonts.robotoRegular};
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.3px;
    padding-top: 0.2rem;
    ${statusTextColor
        ? `color: ${statusTextColor}`
        : `color: ${Colors.Success}`}
`;
