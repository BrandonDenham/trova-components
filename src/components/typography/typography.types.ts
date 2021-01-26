import { ParagraphSize } from './paragraphSize';

export default interface Typography {
    size?: ParagraphSize;
    children: string;
    // 'Indexer'
    [x: string]: any;
    className?: string;
}
