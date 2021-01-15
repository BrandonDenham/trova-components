/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React from 'react';

import { DropdownMenuProps } from './dropdownMenu.types';
import { list, listItem } from './dropdownMenu.styles';

/**
 * Renders a <DropdownMenu /> component
 * @param  props
 * @param  props.children - The options that are possible, that provide the list of what's available in the dropdown.
 * @param  props.searching - This will be a prop to declare if something is being searched, if true, a loading indicator should be shown in the menu
 * @param  props.listVisible - This determines if the list should be shown
 * @param  props.handleClick - What happens when a menu element is clicked on
 */

const DropdownMenu: React.FC<DropdownMenuProps> = ({
    children,
    searching,
    listVisible,
    handleClick,
}) => {
    const theme = useTheme();
    return (
        <React.Fragment>
            {listVisible && !searching && (
                <ul css={list(theme)}>
                    {children.map((child) => (
                        <li
                            css={listItem()}
                            onClick={handleClick}
                            data-value={child.value as string}
                            key={child.value}
                        >
                            {child.children}
                        </li>
                    ))}
                </ul>
            )}
        </React.Fragment>
    );
};

export default DropdownMenu;
