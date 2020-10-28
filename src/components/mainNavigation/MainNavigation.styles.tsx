import { css } from '@emotion/core';

export const mainNavigation = css`
    @media (min-width: 835px) {
        padding: 1.5rem 3.5rem 3rem 2rem;
    }
    box-sizing: border-box;
`;
export const mainNavigationMainContainer = (anchor: boolean) => css`
    @media (max-width: 835px) {
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
export const mainNavigationLogo = css`
    @media (min-width: 835px) {
        padding-right: 7rem;
        width: 10rem;
    }
    @media (max-width: 835px) {
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
export const mainNavigationBellImage = css`
    @media (min-width: 835px) {
        width: 2rem;
        height: 2rem;
    }
    @media (max-width: 835px) {
        width: 1.5rem;
        height: 1.5rem;
    }
    cursor: pointer;
`;
export const mainNavigationProfilePictureImage = css`
    @media (min-width: 835px) {
        padding-left: 1.5rem;
        width: 3.5rem;
        height: 3.5rem;
    }
    @media (max-width: 835px) {
        padding-left: 1rem;
        padding-right: 1.3rem;
        width: 2.5rem;
        height: 2.5rem;
    }
    cursor: pointer;
`;
export const mainNavigationCloseImage = css`
    width: 1.5rem;
    height: 1.5rem;
    flex-grow: 1;
    padding-right: 1.3rem;
    cursor: pointer;
`;
export const mainNavigationHamburgerImage = css`
    width: 1.5rem;
    height: 1.5rem;
    flex-grow: 1;
    padding-right: 1.3rem;
    cursor: pointer;
`;