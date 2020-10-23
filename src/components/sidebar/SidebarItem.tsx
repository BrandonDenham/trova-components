/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { SyntheticEvent } from 'react';
import { useTheme } from 'emotion-theming';
import React, { useCallback } from 'react';

import SidebarItemProps from './SidebarItem.types';
import { Theme } from '../Theme/Theme.types';

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
    const itemClicked = useCallback(
        (event: SyntheticEvent) => {
            onClick ? onClick(event, id) : event.stopPropagation();
        },
        [id]
    );
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
                    color: ${theme.colors.dark};
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
                            : `color: ${theme.colors.success}`}
                    `}
                >
                    {statusText}
                </p>
            )}
        </div>
    );
};

export default SidebarItem;
