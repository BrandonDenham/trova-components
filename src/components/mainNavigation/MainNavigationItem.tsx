/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import { SyntheticEvent, useCallback } from 'react';
import Hidden from '@material-ui/core/Hidden';

import MainNavigationItemProps from './MainNavigationItem.types';
import {
    mainNavigationItem,
    mainNavigationItemContent,
} from './MainNavigationItem.styles';

import imgArrow from '../../shared/images/icons/right.svg';

const MainNavigationItem: React.FC<MainNavigationItemProps> = ({
    content,
    selected = false,
    id,
    onClick,
    className,
}) => {
    const theme = useTheme();
    const itemClicked = useCallback(
        (event: SyntheticEvent) => {
            onClick ? onClick(event, id) : event.stopPropagation();
        },
        [id, onClick]
    );
    return (
        <div
            data-testid="mainnavigationitem"
            css={mainNavigationItem}
            onClick={itemClicked}
            className={className}
        >
            <p
                data-testid="mainnavigationitem__content"
                css={mainNavigationItemContent(theme, selected)}
            >
                {content}
            </p>
            <Hidden mdUp>
                <img alt="Arrow" src={imgArrow} />
            </Hidden>
        </div>
    );
};

export default MainNavigationItem;
