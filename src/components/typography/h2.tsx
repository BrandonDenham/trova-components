/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React from 'react';

import { h2Style } from './h2.styles';
import Typography from './typography.types';

const H2: React.FC<Typography> = ({ children, className, ...otherProps }) => {
    const theme = useTheme();
    return (
        <h2
            data-testid="h2"
            css={h2Style(theme)}
            className={className}
            {...otherProps}
        >
            {children}
        </h2>
    );
};

export default H2;
