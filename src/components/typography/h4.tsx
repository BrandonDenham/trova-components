/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React from 'react';

import { h4Style } from './h4.styles';
import Typography from './typography.types';

const H4: React.FC<Typography> = ({ children, ...otherProps }) => {
    const theme = useTheme();
    return (
        <h4 data-testid="h4" css={h4Style(theme)} {...otherProps}>
            {children}
        </h4>
    );
};

export default H4;
