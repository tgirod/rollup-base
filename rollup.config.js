import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import copy from 'rollup-plugin-copy-assets'

export default {
    input: 'src/app.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    plugins: [
        postcss({
            extract: true
        }),
        resolve(), 
        commonjs(),
        babel({
            'presets': [
                ['env', {
                    'modules': false
                }]
            ],
            'plugins': [
                ['external-helpers'],
            ],
        }),
        copy({
            assets: ['./src/index.html']
        }),
    ],
};
