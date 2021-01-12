/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SyntheticEvent } from 'react';
import { useTheme } from '@emotion/react';
import React, { useCallback } from 'react';

import SidebarItemProps from './SidebarItem.types';
import { Theme } from '../theme/theme.types';
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
        [id,onClick]
    );
    return (
        <div
            data-testid="sidebar__item"
            css={sidebarItem(theme, selected)}
            onClick={itemClicked}
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
