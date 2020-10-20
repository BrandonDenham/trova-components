const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: ['@storybook/addon-essentials'],
    webpackFinal: async (config) => {
        config.module.rules[0].use[0].options.presets = [
            require.resolve('@babel/preset-react'),
            require.resolve('@babel/preset-env'),
            // Emotion preset must run BEFORE reacts preset to properly convert css-prop.
            // Babel preset-ordering runs reversed (from last to first). Emotion has to be after React preset.
            require.resolve('@emotion/babel-preset-css-prop'),
        ];
        config.module.rules.push(
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, '../'),
            },
            {
                test: /\.(ts|tsx)$/,
                loader: require.resolve('babel-loader'),
                options: {
                    presets: [
                        ['react-app', { flow: false, typescript: true }],
                        require.resolve('@emotion/babel-preset-css-prop'),
                    ],
                },
            }
        );

        config.resolve.extensions.push('.ts', '.tsx');

        return config;
    },
};
