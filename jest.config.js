module.exports = {
    roots: ['./src'],
    setupFilesAfterEnv: ['./jest.setup.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    testPathIgnorePatterns: ['node_modules/'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['**/*.test.(ts|tsx)'],
    moduleNameMapper: {
        // Mocks out all these file formats when tests are run
        '\\.(png|svg|pdf|jpg|jpeg|ttf)$': '<rootDir>/mocks/fileMock.js',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    snapshotSerializers: ['@emotion/jest'],
};
