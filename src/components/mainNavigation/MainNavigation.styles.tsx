import { css, Theme } from '@emotion/react';

import { Colors } from '../../shared/constants/colors';

export const mainNavigation = (theme: Theme) => css`
    @media (min-width: ${theme.breakpoints.lg + 1}px) {
        padding: 1.5rem 3.5rem 3rem 2rem;
    }
    @media (max-width: ${theme.breakpoints.md}px) {
        width: 100%;
        position: fixed;
        z-index: 1200;
        top: 0;
    }
    box-sizing: border-box;
    background-color: ${Colors.White};
`;
export const mainNavigationMainContainer = (
    theme: Theme,
    anchor: boolean
) => css`
    display: flex;
    justify-content: space-between;
    @media (max-width: ${theme.breakpoints.lg}px) {
        padding: 1.5rem;
    }
    @media (max-width: ${theme.breakpoints.md}px) {
        padding: 1.5rem 0 1rem 0;
        ${anchor === true &&
        `position: sticky; background: white; 
        top: 0;`}
    }
`;
export const mainNavigationSmallContainer = css`
    display: flex;
    align-items: center;
    overflow: auto;
`;
export const mainNavigationItemContainer = () => css`
    padding: 2rem 0;
`;
export const mainNavigationLogo = (theme: Theme) => css`
    @media (min-width: ${theme.breakpoints.md + 1}px) {
        padding-right: 7rem;
        width: 16rem;
    }
    @media (max-width: ${theme.breakpoints.md}px) {
        width: 10rem;
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
        width: 2.25rem;
        height: 2.25rem;
        border-radius: 2rem;
    }
    @media (max-width: ${theme.breakpoints.md}px) {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 2rem;
    }
    cursor: pointer;
`;
export const mainNavigationCloseImage = css`
    width: 3.5rem;
    height: 1.5rem;
    padding: 0 1.3rem 0 1rem;
    cursor: pointer;
`;
export const mainNavigationHamburgerImage = css`
    width: 3.5rem;
    height: 1.5rem;
    padding: 0 1.3rem 0 1rem;
    cursor: pointer;
`;
