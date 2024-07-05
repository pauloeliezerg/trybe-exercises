import globals from 'globals';
import pluginJs from '@eslint/js';


export default [
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    {
        rules: {
            'indent': [
                'error',
                4
            ],
            'linebreak-style': [
                'error',
                'unix'
            ],
            'quotes': [
                'error',
                'single'
            ],
            'semi': [
                'error',
                'always'
            ]
        }
    }
];