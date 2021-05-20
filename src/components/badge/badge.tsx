/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React, { SyntheticEvent, useCallback } from 'react';

import BadgeProps from './badge.types';
import { mainContainer, detailSpan } from './badge.styles';
import ComponentFooter from '../__private/componentFooter';

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
    borderRadius = 4,
    fontSize = 20,
    label,
}) => {
    const theme = useTheme();
    const handleBadge = useCallback(
        (event: SyntheticEvent) => {
            onClick ? onClick(event) : event.stopPropagation();
        },
        [onClick]
    );
    return (
        <div
            css={mainContainer(
                backgroundColor,
                borderRadius,
            )}
            onClick={handleBadge}
        >
            {label && (
                <span css={detailSpan( color, fontSize )}>{label}</span>
            )}
        </div>
    );
};

export default Badge;
