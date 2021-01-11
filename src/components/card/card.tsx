/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { useTheme } from 'emotion-theming';

import { Theme } from '../theme/theme.types';
import cardProps from './card.types';
import { card } from './card.styles';
import { Colors } from '../../shared/constants/colors';

/**
 * Renders a <Card /> component
 * @param  props
 * @param  props.children - The elements to include inside the card
 * @param  props.backgroundColor - The background color of the card. Defaults to White
 */

const Card = React.forwardRef<HTMLInputElement, cardProps>(
    ({ children, backgroundColor = Colors.White, customCss }, ref) => {
        const theme = useTheme<Theme>();
        const cardStyles = card(theme, backgroundColor);
        return (
            <div
                data-testid="card"
                css={{ ...cardStyles, ...customCss }}
                ref={ref}
            >
                {children}
            </div>
        );
    }
);

export default Card;
