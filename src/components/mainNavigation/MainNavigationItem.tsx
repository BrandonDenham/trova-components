/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import { SyntheticEvent, useCallback } from 'react';
import { Visible } from 'react-grid-system';
import MainNavigationItemProps from './MainNavigationItem.types';
import {
    mainNavigationItem,
    mainNavigationItemContent,
    mainNavigationItemArrow,
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
            <Visible xs sm md>
                <div>
                    <img
                        alt="Arrow"
                        src={imgArrow}
                        css={mainNavigationItemArrow}
                    />
                </div>
            </Visible>
        </div>
    );
};

export default MainNavigationItem;
