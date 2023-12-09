module.exports = {
    moduleFileExtensions: [
        'js',
        'ts',
    ],
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
    ],
    testMatch: [
        '**/*.test.ts',
    ],
    testEnvironment: 'node',
    verbose: true,
    preset: 'ts-jest/presets/js-with-babel',
}
