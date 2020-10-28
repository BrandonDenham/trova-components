/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SyntheticEvent } from 'react';
import { useTheme } from 'emotion-theming';
import React, { useCallback } from 'react';

import SidebarItemProps from './SidebarItem.types';
import { Theme } from '../Theme/Theme.types';
import {
    sidebarItem,
    sidebarItemTitle,
    sidebarItemSubtitle,
    sidebarItemStatusText,
} from './SidebarItem.styles';

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
            css={sidebarItem(selected)}
            onClick={itemClicked}
        >
            <p css={sidebarItemTitle(theme)}>{title}</p>
            <p css={sidebarItemSubtitle}>{subtitle}</p>
            {statusText && (
                <p css={sidebarItemStatusText(statusTextColor, theme)}>
                    {statusText}
                </p>
            )}
        </div>
    );
};

export default SidebarItem;
