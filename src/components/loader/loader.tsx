import React from 'react';

import LoaderProps from './loader.types';
import ComponentLoader from './_private/componentLoader';

const Loader: React.FC = ({ size, color }: LoaderProps) => {
    return <ComponentLoader size={size} color={color} />;
};

export default Loader;
