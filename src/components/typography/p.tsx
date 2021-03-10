/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React from 'react';

import { pStyle } from './p.styles';
import Typography from './typography.types';
import { ParagraphSize } from './paragraphSize';
import { Colors } from '../../shared/constants/colors';

const P: React.FC<Typography> = ({
    size = ParagraphSize.Medium,
    color = Colors.Dark,
    children,
    className,
    isBold,
    ...otherProps
}) => {
    const theme = useTheme();
    return (
        <p
            data-testid="p"
            css={pStyle(size, theme, color, isBold)}
            className={className}
            {...otherProps}
        >
            {children}
        </p>
    );
};

export default P;
