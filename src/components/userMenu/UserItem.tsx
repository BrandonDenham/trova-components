/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React, { useCallback, SyntheticEvent } from 'react';

import UserItemProps from './UserItem.types';
import { userItem, userItemTitle } from './UserItem.styles';

const UserItem: React.FC<UserItemProps> = ({
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
            css={userItem(selected)}
            onClick={itemClicked}
            className={className}
        >
            <span css={userItemTitle(theme)}>{title}</span>
        </div>
    );
};

export default UserItem;
