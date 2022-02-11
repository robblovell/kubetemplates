// eslint-disable-next-line no-undef
module.exports = {
    'roots': [
        '<rootDir>/packages'
    ],
    'testMatch': [
        '**/?(*.)+(unit).+(ts)'
    ],
    'transform': {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    'reporters': [
        'default',
        ['jest-html-reporters', {
            'publicPath': './coverage',
            'filename': 'report.html',
            'expand': true
        }]
    ],
    globals: {
        'ts-jest': {
            tsconfig: {
                module: 'commonjs',
                moduleResolution: 'node',
                noImplicitAny: false,
                removeComments: true,
                noLib: false,
                emitDecoratorMetadata: true,
                experimentalDecorators: true,
                esModuleInterop: true,
                target: 'es2018',
                sourceMap: true,
                lib: [
                    'es2018'
                ]
            }
        },
    },
    setupFiles: ['<rootDir>/jestsetup.js'],
}