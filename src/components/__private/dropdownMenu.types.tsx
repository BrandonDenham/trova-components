import { SyntheticEvent } from 'react';
import { ComponentWidth } from '../input/';

import Option from '../dropdown/option.types';

export interface DropdownMenuProps {
    children: Option[];
    searching?: boolean;
    listVisible: boolean;
    handleClick: (event: SyntheticEvent) => void;
    size?: ComponentWidth;
}
