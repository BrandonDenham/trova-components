import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';
import { loaderSize } from './loaderSize';


export default interface LoaderProps extends SimpleComponent{
    size?: number;
    color?: string;
    speed?: number,
    overrideIterator?: any,
    utterance?: number,
    begin?: number,
    duration?: number,
    iterations?: number
}

export interface getIteratorValuesProps extends SimpleComponent{
    iterations?: number;
    overrideIterator?: any;
}

export interface createBreakpointsProps extends SimpleComponent {
    values: any;
    color: string;
    utterance?: number,
    begin?: number,
    duration?: number
}

export interface createMarkupProps extends SimpleComponent {
    size?: number;
    color?: string;
    speed?: number,
    overrideIterator?: any,
    utterance?: number,
    begin?: number,
    duration?: number,
    iterations?: number,
    __html: any
}
