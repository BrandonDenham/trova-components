/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { SyntheticEvent, useCallback } from 'react';

import BadgeProps from './badge.types';
import { badgeContainer, badgeText } from './badge.styles';

/**
 * Renders a <Badge /> component
 * @param  props
 * @param  props.label - Label
 * @param  props.backgroundSize - backgroundSize
 */

const Badge: React.FC<BadgeProps> = ({
    onClick,
    backgroundColor = '#00b3ca',
    color = '#ffffff',
    label,
}) => {
    const handleBadgeClick = useCallback(
        (event: SyntheticEvent) => {
            onClick ? onClick(event) : event.stopPropagation();
        },
        [onClick]
    );
    return (
        <div
            css={badgeContainer(
                backgroundColor,
            )}
            onClick={handleBadgeClick}
        >
            {label && (
                <span css={badgeText( color )}>{label}</span>
            )}
        </div>
    );
};

export default Badge;
