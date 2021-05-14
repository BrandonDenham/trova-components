/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { usePopper } from 'react-popper';

import MenuProps from './Menu.types';

import { menuDropdown } from './Menu.styles';
const Menu: React.FC<MenuProps> = ({
    children,
    targetRef,
    placement = `bottom-start`,
}) => {
    const [open, setOpen] = useState(false);
    const [menuRef, setMenuRef] = useState<HTMLDivElement | null>();
    const { styles, attributes } = usePopper(targetRef.current, menuRef, {
        placement,
    });

    useEffect(() => {
        if (targetRef.current) {
            targetRef.current.onclick = () => setOpen(!open);
            targetRef.current.style.cursor = `pointer`;
        }

        return () => {
            if (targetRef.current) {
                targetRef.current.onclick = null;
                targetRef.current.style.cursor = `initial`;
            }
        };
    }, [targetRef, targetRef.current, setOpen, open]);

    const popperStyles = styles
        ? { ...styles.popper, ...styles.offset }
        : undefined;

    return open ? (
        <div
            css={menuDropdown}
            ref={ref => setMenuRef(ref)}
            style={popperStyles}
            {...attributes.popper}
        >
            {children}
        </div>
    ) : null;
};
export default Menu;
