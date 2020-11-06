import { IconName } from './iconName';
import { IconSize } from './iconSize';

export default interface IconProps {
    name: IconName;
    size?: IconSize;
    color?: string;
}
