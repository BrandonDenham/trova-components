import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';
import { IconName } from './iconName';
import { IconSize } from './iconSize';

export default interface IconProps extends SimpleComponent{
    name: IconName;
    size?: IconSize;
    color?: string;
}
