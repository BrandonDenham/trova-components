/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React from 'react';

import { h3Style } from './h3.styles';
import Typography from './typography.types';

const H3: React.FC<Typography> = ({ children, ...otherProps }) => {
    const theme = useTheme();
    return (
        <h3 data-testid="h3" css={h3Style(theme)} {...otherProps}>
            {children}
        </h3>
    );
};

export default H3;
