/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React from 'react';

import { pStyle } from './p.styles';
import Typography from './typography.types';
import { ParagraphSize } from './paragraphSize';

const P: React.FC<Typography> = ({
    size = ParagraphSize.Medium,
    children,
    ...otherProps
}) => {
    const theme = useTheme();
    return (
        <p data-testid="p" css={pStyle(size, theme)} {...otherProps}>
            {children}
        </p>
    );
};

export default P;
