import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';
import { ParagraphSize } from './paragraphSize';

export default interface Typography extends SimpleComponent{
    size?: ParagraphSize;
    children: string;
    isBold: boolean;
    // 'Indexer'
    [x: string]: any;
}
