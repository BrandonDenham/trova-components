/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';

import React from 'react';

import mainContentProps from './mainContent.types';
import { mainContent } from './mainContent.styles';

/**
 * Renders a <MainContent /> component
 * @param  props
 * @param  props.children - The elements to include inside the main content
 */

const MainContent: React.FC<mainContentProps> = ({ children, className }) => {
    const theme = useTheme();

    return (
        <div
            data-testid="mainContent"
            css={mainContent(theme)}
            className={className}
        >
            {children}
        </div>
    );
};

export default MainContent;
