/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { SyntheticEvent, useState } from 'react';
import { useTheme } from 'emotion-theming';

import {
    SidebarProps,
    SidebarItemProps,
    SidebarMenuProps,
} from './Sidebar.types';
import { Theme } from '../Theme/Theme.types';
import './Sidebar.css';
const imgArrow = require('../../shared/images/small gray arrow.svg') as string;

const Sidebar: React.FC<SidebarProps> = ({ children, visible = true }) => (
    <div>
        {visible && (
            <div
                data-testid="sidebar"
                css={css`
                    @media (min-width: 700px) {
                        max-width: 274px;
                    }
                    padding: 0rem 1rem 0rem 1rem;
                    box-sizing: border-box;
                `}
            >
                {children}
            </div>
        )}
    </div>
);
const SidebarItem: React.FC<SidebarItemProps> = ({
    title,
    subtitle,
    statusText = null,
    statusTextColor,
    selected = false,
    id,
    onClick,
}) => {
    const theme = useTheme<Theme>();
    const itemClicked = (event: SyntheticEvent) => {
        onClick ? onClick(event, id || '') : event.stopPropagation();
    };
    return (
        <div
            data-testid="sidebar__item"
            css={css`
                background-color: white;
                border-radius: 13px;
                font-family: 'Roboto-Bold';
                padding: 0.5rem 1rem;
                cursor: pointer;
                ${selected === true && `background-color: #eff1f7;`}
                &:hover {
                    background-color: #eff1f7;
                    transition: 0.5s;
                }
                margin: 0.5rem 0rem;
            `}
            onClick={itemClicked}
        >
            <p
                css={css`
                    font-size: 14px;
                    line-height: 18px;
                    margin: 0px;
                `}
            >
                {title}
            </p>
            <p
                css={css`
                    font-family: 'Roboto-Regular';
                    font-size: 12px;
                    line-height: 14px;
                    color: #626c79;
                    letter-spacing: 0.3px;
                    padding-top: 0.2rem;
                `}
            >
                {subtitle}
            </p>
            {statusText && (
                <p
                    css={css`
                        font-family: 'Roboto-Regular';
                        font-size: 12px;
                        line-height: 14px;
                        letter-spacing: 0.3px;
                        padding-top: 0.2rem;
                        ${statusTextColor
                            ? `color: ${statusTextColor}`
                            : `color: ${theme.colors.green}`}
                    `}
                >
                    {statusText}
                </p>
            )}
        </div>
    );
};

const SidebarMenu: React.FC<SidebarMenuProps> = ({
    open = true,
    onToggle,
    title,
    children,
}) => {
    const [openMenu, setOpenMenu] = useState(open);
    const theme = useTheme<Theme>();
    const toggle = () => {
        if (onToggle) {
            onToggle(!openMenu);
        }
        setOpenMenu(!openMenu);
    };
    return (
        <div
            data-testid="sidebar__menu"
            onClick={() => toggle()}
            css={css`
                cursor: pointer;
            `}
        >
            <div
                css={css`
                    display: flex;
                    justify-content: space-between;
                `}
            >
                <h5
                    css={css`
                        text-transform: uppercase;
                        font-size: 13px;
                        line-height: 15px;
                        font-family: 'Roboto-Bold';
                        padding: 0rem 0rem 0.7rem 1rem;
                        color: ${theme.colors.gray};
                    `}
                >
                    {title}
                </h5>
                <img
                    alt="Arrow"
                    src={imgArrow}
                    css={css`
                        padding: 0 1rem 0.7rem 0;
                    `}
                />
            </div>
            {openMenu ? children : null}
        </div>
    );
};

export { SidebarItem, SidebarMenu };
export default Sidebar;
