import { css } from '@emotion/core';

export const sidebarItem = css`
    background-color: white;
    border-radius: 13px;
    font-family: 'Roboto-Bold';
    padding: 0.5rem 1rem;
    cursor: pointer;
    &:hover {
        background-color: #eff1f7;
        transition: 0.5s;
    }
    margin: 0.5rem 0rem;
`;
export const sidebarItemTitle = css`
    font-size: 14px;
    line-height: 18px;
    margin: 0px;
`;
export const sidebarItemSubtitle = css`
    font-family: 'Roboto-Regular';
    font-size: 12px;
    line-height: 14px;
    color: #626c79;
    letter-spacing: 0.3px;
    padding-top: 0.2rem;
`;
export const sidebarItemStatusText = css`
    font-family: 'Roboto-Regular';
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.3px;
    padding-top: 0.2rem;
`;
