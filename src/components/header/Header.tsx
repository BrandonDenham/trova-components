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
    ({ title, subTitle, iconDescription, backgroundImage, icon }) => {
        const theme = useTheme();
        return (
            <div css={header(theme, backgroundImage)}>
                <p css={headerTitle(theme)}>{title}</p>
                <div css={headerDetails(theme)}>
                    <span css={headerDates(theme)}>{subTitle}</span>
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
