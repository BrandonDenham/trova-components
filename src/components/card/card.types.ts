import { SerializedStyles } from '@emotion/react';
import { ReactNode } from 'react';
import { Colors } from '../../shared/constants/colors';
import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';

export default interface CardProps extends SimpleComponent{
    children: ReactNode;
    backgroundColor: Colors;
    customCss?: SerializedStyles;
    ref?: React.RefCallback<any>;
}
