import { SerializedStyles } from '@emotion/react';
import { ReactNode } from 'react';
import { Colors } from '../../shared/constants/colors';

export default interface CardProps {
    children: ReactNode;
    backgroundColor: Colors;
    customCss?: SerializedStyles;
    ref?: React.RefCallback<any>;
    className?: string;
}
