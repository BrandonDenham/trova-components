import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';
import { loadingSize } from './loadingSize';


export default interface LoadingProps extends SimpleComponent{
    size?: loadingSize;
    color?: string;
}
