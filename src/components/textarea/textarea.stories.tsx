import React from 'react';

import Textarea from './textarea';
import { TextareaSize } from './textareaSize';

export default {
    title: 'Textarea',
    component: Textarea,
};

export const MediumTextarea = () => (
    <Textarea
        name="test"
        value="Explore the land and sea that inspired some of Darwin's greatest theories of evolution and the animals that paved the way! This 9 day adventure across the islands of the Galapagos will have you face-to-face with blue footed boobies, marine iguanas, finches, and sharks; all found only here in the Galapagos!"
        placeholder="Placeholder"
        label="Trip description"
        detail="Describe the trip in 2-3 sentences."
        size={TextareaSize.Medium}
    />
);

export const LargeTextarea = () => (
    <Textarea
        name="test"
        value="Explore the land and sea that inspired some of Darwin's greatest theories of evolution and the animals that paved the way! This 9 day adventure across the islands of the Galapagos will have you face-to-face with blue footed boobies, marine iguanas, finches, and sharks; all found only here in the Galapagos!"
        placeholder="Placeholder"
        label="Trip description"
        detail="Describe the trip in 2-3 sentences."
        size={TextareaSize.Large}
    />
);


export const FlexibleTextarea = () => (
    <Textarea
        name="test"
        value="Explore the land and sea that inspired some of Darwin's greatest theories of evolution and the animals that paved the way! This 9 day adventure across the islands of the Galapagos will have you face-to-face with blue footed boobies, marine iguanas, finches, and sharks; all found only here in the Galapagos!"
        placeholder="Placeholder"
        label="Trip description"
        detail="Describe the trip in 2-3 sentences."
        size={TextareaSize.Flexible}
    />
);

export const EmptyTextarea = () => (
    <Textarea
        name="test"
        placeholder="Person McPerson&#10;503-555-5555&#10;@personmcperson"
        label="Trip description"
        detail="Describe the trip in 2-3 sentences."
        size={TextareaSize.Large}
    />
);

export const DisabledTextarea = () => (
    <Textarea
        name="test"
        value="Explore the land and sea that inspired some of Darwin's greatest theories of evolution and the animals that paved the way! This 9 day adventure across the islands of the Galapagos will have you face-to-face with blue footed boobies, marine iguanas, finches, and sharks; all found only here in the Galapagos!"
        placeholder="Placeholder"
        label="Trip description"
        disabled={true}
        disabledText="This cannot be updated."
    />
);

export const Info = () => (
    <Textarea
        name="test"
        value="Explore the land and sea that inspired some of Darwin's greatest theories of evolution and the animals that paved the way! This 9 day adventure across the islands of the Galapagos will have you face-to-face with blue footed boobies, marine iguanas, finches, and sharks; all found only here in the Galapagos!"
        placeholder="Placeholder"
        label="Trip description"
        detail="Describe the trip in 2-3 sentences."
        info="This is actually a really really long tooltip to be used as an example."
        size={TextareaSize.Medium}
    />
);

export const SingleError = () => (
    <Textarea
        name="test"
        value="Explore the land and sea that inspired some of Darwin's greatest theories of evolution and the animals that paved the way! This 9 day adventure across the islands of the Galapagos will have you face-to-face with blue footed boobies, marine iguanas, finches, and sharks; all found only here in the Galapagos!"
        error="Textarea must be filled"
        placeholder="Placeholder"
        label="Trip description"
    />
);

export const MultipleErrors = () => (
    <Textarea
        name="test"
        value="Explore the land and sea that inspired some of Darwin's greatest theories of evolution and the animals that paved the way! This 9 day adventure across the islands of the Galapagos will have you face-to-face with blue footed boobies, marine iguanas, finches, and sharks; all found only here in the Galapagos!"
        error={['Textarea must be filled', 'Textarea must be numeric']}
        placeholder="Placeholder"
        label="Trip description"
    />
);

export const InfoSearchErrors = () => (
    <Textarea
        name="test"
        value="Explore the land and sea that inspired some of Darwin's greatest theories of evolution and the animals that paved the way! This 9 day adventure across the islands of the Galapagos will have you face-to-face with blue footed boobies, marine iguanas, finches, and sharks; all found only here in the Galapagos!"
        placeholder="Placeholder"
        label="Trip description"
        detail="Describe the trip in 2-3 sentences."
        size={TextareaSize.Large}
        error={['Textarea must be filled', 'Textarea must be numeric']}
        info="This is actually a really really long tooltip to be used as an example."
    />
);
