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
            css={[
                sidebarItem,
                `${selected === true && `background-color: #eff1f7;`}`,
            ]}
            onClick={itemClicked}
        >
            <p css={[sidebarItemTitle, `color: ${theme.colors.dark};`]}>
                {title}
            </p>
            <p css={sidebarItemSubtitle}>{subtitle}</p>
            {statusText && (
                <p
                    css={[
                        sidebarItemStatusText,
                        `${
                            statusTextColor
                                ? `color: ${statusTextColor}`
                                : `color: ${theme.colors.success}`
                        }`,
                    ]}
                >
                    {statusText}
                </p>
            )}
        </div>
    );
};

export default SidebarItem;
