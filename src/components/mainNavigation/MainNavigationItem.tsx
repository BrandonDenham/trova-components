/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SyntheticEvent, useCallback } from 'react';
import { useTheme } from 'emotion-theming';
import { Visible } from 'react-grid-system';
import MainNavigationItemProps from './MainNavigationItem.types';
import { Theme } from '../Theme/Theme.types';
import {
    mainNavigationItem,
    mainNavigationItemContent,
    mainNavigationItemArrow,
} from './MainNavigationItem.styles';

const imgArrow = require('../../shared/images/icons/right.svg') as string;

const MainNavigationItem: React.FC<MainNavigationItemProps> = ({
    content,
    selected = false,
    id,
    onClick,
}) => {
    const theme = useTheme<Theme>();
    const itemClicked = useCallback((event: SyntheticEvent) => {
        onClick ? onClick(event, id || '') : event.stopPropagation();
    }, [id]);
    return (
        <div
            data-testid="mainnavigationitem"
            css={mainNavigationItem}
            onClick={itemClicked}
        >
            <p
                data-testid="mainnavigationitem__content"
                css={mainNavigationItemContent(theme, selected)}
            >
                {content}
            </p>
            <div>
                <Visible xs sm md>
                    <img
                        alt="Arrow"
                        src={imgArrow}
                        css={mainNavigationItemArrow}
                    />
                </Visible>
            </div>
        </div>
    );
};

export default MainNavigationItem;
