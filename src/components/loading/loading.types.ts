import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';
import { loadingSize } from './loadingSize';


export default interface LoadingProps extends SimpleComponent{
    size?: number;
    color?: string;
    speed?: number,
    overrideIterator?: string,
    utterance?: number,
    begin?: number,
    duration?: number,
    iterations?: number
}
