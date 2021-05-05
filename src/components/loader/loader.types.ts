import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';
import { loaderSize } from './loaderSize';


export default interface LoaderProps extends SimpleComponent{
    size?: number;
    color?: string;
    speed?: number,
    overrideIterator?: string,
    utterance?: number,
    begin?: number,
    duration?: number,
    iterations?: number
}
