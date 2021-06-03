/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { SyntheticEvent, useCallback } from 'react';

import BadgeProps from './badge.types';
import { badgeContainer, badgeText } from './badge.styles';
import { Colors } from '../..';

/**
 * Renders a <Badge /> component
 * @param  props
 * @param  props.text - Text
 * @param  props.backgroundColor - Background Color
 * @param  props.color - Text Color
 * @param  props.onClick - OnClick function
 */

const Badge: React.FC<BadgeProps> = ({
    onClick,
    backgroundColor = '#00b3ca',
    color = Colors.White,
    text,
}) => {
    const handleBadgeClick = useCallback(
        (event: SyntheticEvent) => {
            onClick ? onClick(event) : event.stopPropagation();
        },
        [onClick]
    );
    return (
        <div css={badgeContainer(backgroundColor)} onClick={handleBadgeClick}>
            {text && <span css={badgeText(color)}>{text}</span>}
        </div>
    );
};

export default Badge;
