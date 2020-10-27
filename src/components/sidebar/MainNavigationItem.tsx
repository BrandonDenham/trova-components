/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { SyntheticEvent } from 'react';
import { useTheme } from 'emotion-theming';
import { Visible } from 'react-grid-system';
import MainNavigationItemProps from './MainNavigationItem.types';
import { Theme } from '../Theme/Theme.types';
import './Sidebar.css';

const imgArrow = require('../../shared/images/logo/right.svg') as string;

const MainNavigationItem: React.FC<MainNavigationItemProps> = ({
    content,
    selected = false,
    id,
    onClick,
}) => {
    const theme = useTheme<Theme>();
    const itemClicked = (event: SyntheticEvent) => {
        onClick ? onClick(event, id || '') : event.stopPropagation();
    };
    return (
        <div
            data-testid="mainnavigation__item"
            css={css`
                cursor: pointer;
                display: flex;
                justify-content: space-between;
            `}
            onClick={itemClicked}
        >
            <p
                css={css`
                    @media (min-width: 835px) {
                        padding-right: 3rem;
                        ${selected
                            ? `color: ${theme.colors.black}`
                            : `color: ${theme.colors.lightGray}`}
                    }
                    @media (max-width: 835px) {
                        padding-bottom: 1rem;
                        color: ${theme.colors.black};
                    }
                    font-family: 'Roboto-Bold';
                    font-size: 16px;
                    line-height: 19px;
                    letter-spacing: 0.8px;
                    text-transform: uppercase;
                    padding-left: 1rem;
                    &:hover {
                        color: ${theme.colors.black};
                    }
                `}
            >
                {content}
            </p>
            <div>
                <Visible xs sm md>
                    <img
                        alt="Arrow"
                        src={imgArrow}
                        css={css`
                            padding-right: 1.3rem;
                        `}
                    />
                </Visible>
            </div>
        </div>
    );
};

export default MainNavigationItem;
