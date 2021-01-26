/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React from 'react';

import { h1Style } from './h1.styles';
import Typography from './typography.types';

const H1: React.FC<Typography> = ({ children, className, ...otherProps }) => {
    const theme = useTheme();
    return (
        <h1
            data-testid="h1"
            css={h1Style(theme)}
            className={className}
            {...otherProps}
        >
            {children}
        </h1>
    );
};

export default H1;
