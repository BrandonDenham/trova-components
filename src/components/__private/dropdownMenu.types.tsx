import { SyntheticEvent } from 'react';
import { ComponentWidth } from '../input/';

import Option from '../dropdown/option.types';

export interface DropdownMenuProps {
    children: Option[];
    selectedChildren?: boolean[];
    searching?: boolean;
    listVisible: boolean;
    handleClick?: (event: SyntheticEvent) => void;
    size?: ComponentWidth;
    label?: string;
    multiple?: boolean;
    value?: string[];
}
