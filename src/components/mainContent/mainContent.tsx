/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { useTheme } from 'emotion-theming';

import { Theme } from '../theme/theme.types';
import mainContentProps from './mainContent.types';
import { mainContent } from './mainContent.styles';

/**
 * Renders a <MainContent /> component
 * @param  props
 * @param  props.children - The elements to include inside the main content
 */

const MainContent: React.FC<mainContentProps> = ({ children }) => {
    const theme = useTheme<Theme>();
    return (
        <React.Fragment>
            <div data-testid="mainContent" css={mainContent(theme)}>
                {children}
            </div>
        </React.Fragment>
    );
};

export default MainContent;
