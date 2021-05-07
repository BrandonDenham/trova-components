/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React, { useCallback, SyntheticEvent } from 'react';

import MenuItemProps from './MenuItem.types';
import { menuItem, menuItemTitle } from './MenuItem.styles';

const MenuItem: React.FC<MenuItemProps> = ({
    title,
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
            data-testid="user__item"
            css={menuItem(selected)}
            onClick={itemClicked}
            className={className}
        >
            <span css={menuItemTitle(theme)}>{title}</span>
        </div>
    );
};

export default MenuItem;
