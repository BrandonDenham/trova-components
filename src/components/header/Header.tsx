/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React from 'react';

import HeaderProps from './Header.types';
import {
    header,
    headerTitle,
    headerDetails,
    headerDates,
    headerLocation,
} from './Header.styles';

const Header = React.forwardRef<HTMLInputElement, HeaderProps>(
    ({ title, subtitle, iconDescription, backgroundImage, icon, className }) => {
        const theme = useTheme();
        return (
            <div css={header(theme, backgroundImage)} className={className}>
                <p css={headerTitle(theme)}>{title}</p>
                <div css={headerDetails(theme)}>
                    <span css={headerDates(theme)}>{subtitle}</span>
                    {iconDescription && (
                        <span css={headerLocation(theme)}>
                            {icon && icon}
                            {iconDescription}
                        </span>
                    )}
                </div>
            </div>
        );
    }
);

export default Header;
