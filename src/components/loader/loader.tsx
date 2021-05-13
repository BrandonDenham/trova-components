import LoaderProps from './loader.types';
import ComponentLoader from './_private/componentLoader';

const Loader: React.FC<LoaderProps> = ({size, color}) => {
    return <ComponentLoader size={size} color={color} />
};

export default Loader;