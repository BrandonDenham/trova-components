import { css, Theme } from '@emotion/react';

import { Colors } from '../../shared/constants/colors';

export const mainNavigation = (theme: Theme) => css`
    @media (min-width: ${theme.breakpoints.md + 1}px) {
        padding: 1.5rem 3.5rem 3rem 2rem;
    }
    box-sizing: border-box;
    background-color: ${Colors.White};
`;
export const mainNavigationMainContainer = (
    theme: Theme,
    anchor: boolean
) => css`
    @media (max-width: ${theme.breakpoints.md}px) {
        padding: 1.5rem 0 3.5rem 0;
        ${anchor === true && `position: sticky; top: 0rem; background: white`}
    }
    display: flex;
    justify-content: space-between;
`;
export const mainNavigationSmallContainer = css`
    display: flex;
    align-items: center;
    overflow: auto;
`;
export const mainNavigationLogo = (theme: Theme) => css`
    @media (min-width: ${theme.breakpoints.md + 1}px) {
        padding-right: 7rem;
        width: 16rem;
    }
    @media (max-width: ${theme.breakpoints.md}px) {
        width: 9rem;
        padding-left: 1rem;
    }
`;
export const mainNavigationDesktopChildren = css`
    display: flex;
    padding-top: 0.3rem;
`;
export const mainNavigationImagesContainer = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
export const mainNavigationBellImage = (theme: Theme) => css`
    @media (min-width: ${theme.breakpoints.md + 1}px) {
        width: 2rem;
        height: 2rem;
    }
    @media (max-width: ${theme.breakpoints.md}px) {
        padding-right: 1rem;
        width: 2.5rem;
        height: 2.5rem;
    }
    cursor: pointer;
`;
export const mainNavigationProfilePictureImage = (theme: Theme) => css`
    @media (min-width: ${theme.breakpoints.md + 1}px) {
        margin-left: 1.5rem;
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 2rem;
    }
    @media (max-width: ${theme.breakpoints.md}px) {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 2rem;
    }
    cursor: pointer;
`;
export const mainNavigationCloseImage = css`
    width: 3.5rem;
    height: 1.5rem;
    flex-grow: 1;
    padding-right: 1.3rem;
    padding-left: 1rem;
    cursor: pointer;
`;
export const mainNavigationHamburgerImage = css`
    width: 3.5rem;
    height: 1.5rem;
    flex-grow: 1;
    padding-right: 1.3rem;
    padding-left: 1rem;
    cursor: pointer;
`;
