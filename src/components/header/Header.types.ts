import { SerializedStyles } from '@emotion/core';
import { ReactNode } from 'react';
import { Colors } from '../../shared/constants/colors';

export default interface HeaderProps {
    title: string;
    dates: string;
    location: string;
    backgroundImage: any;
    children?: ReactNode;
}
