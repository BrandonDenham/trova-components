/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import { usePopper } from 'react-popper';

import MenuProps from './Menu.types';

import { menuDropdown } from './Menu.styles';
const Menu: React.FC<MenuProps> = ({
    open = true,
    children,
    referenceRef = {},
}) => {
    const [menuRef, setMenuRef] = useState<HTMLDivElement | null>();
    const { styles, attributes } = usePopper(referenceRef.current, menuRef);

    const popperStyles = styles
        ? { ...styles.popper, ...styles.offset }
        : undefined;
    return (
        <div
            css={menuDropdown}
            ref={ref => setMenuRef(ref)}
            style={popperStyles}
            {...attributes.popper}
        >
            {open && children}
        </div>
    );
};
export default Menu;
