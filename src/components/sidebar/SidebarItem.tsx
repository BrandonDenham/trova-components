/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React, { useCallback, SyntheticEvent } from 'react';

import SidebarItemProps from './SidebarItem.types';
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
    className,
}) => {
    const theme = useTheme();
    const itemClicked = useCallback(
        (event: SyntheticEvent) => {
            onClick ? onClick(event, id) : event.stopPropagation();
        },
        [id, onClick]
    );
    return (
        <div
            data-testid="sidebar__item"
            css={sidebarItem(theme, selected)}
            onClick={itemClicked}
            className={className}
        >
            <p css={sidebarItemTitle()}>{title}</p>
            <p css={sidebarItemSubtitle(theme)}>{subtitle}</p>
            {statusText && (
                <p css={sidebarItemStatusText(theme, statusTextColor)}>
                    {statusText}
                </p>
            )}
        </div>
    );
};

export default SidebarItem;
