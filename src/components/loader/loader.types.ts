import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';

export default interface LoaderProps extends SimpleComponent {
    size?: number;
    color?: string;
    speed?: number;
    overrideIterator?: any;
    utterance?: number;
    begin?: number;
    duration?: number;
    iterations?: number;
}
