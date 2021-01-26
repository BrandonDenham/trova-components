/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React from 'react';

import cardProps from './card.types';
import { card } from './card.styles';
import { Colors } from '../../shared/constants/colors';

/**
 * Renders a <Card /> component
 * @param  props
 * @param  props.children - The elements to include inside the card
 * @param  props.backgroundColor - The background color of the card. Defaults to White
 * @param  props.className - For usage as an emotion styled component.
 */

const Card = React.forwardRef<HTMLInputElement, cardProps>(
    ({ children, backgroundColor = Colors.White, customCss, className }, ref) => {
        const theme = useTheme();
        const cardStyles = card(theme, backgroundColor);
        return (
            <div
                data-testid="card"
                css={{ ...cardStyles, ...customCss }}
                ref={ref}
                className={className}
            >
                {children}
            </div>
        );
    }
);

export default Card;
