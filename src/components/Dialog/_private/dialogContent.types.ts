import { SyntheticEvent } from 'react';
import DialogHeader from './../dialogHeader.types';
import { Colors } from '../../../shared/constants/colors';
import { ReactNode } from 'react';

export default interface DialogContentProps {
    children: ReactNode;
    header?: DialogHeader;
    backgroundColor: Colors;
    showCloseButton?: boolean;
    onClose?: (event: SyntheticEvent) => void;
}
