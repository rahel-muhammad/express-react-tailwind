const cssnano = require('cssnano')({
    preset: [
        'default',
        {
            discardComments: {
                removeAll: true,
            },
        },
    ],
});

const config = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ],
};

// trim css in production
if (process.env.NODE_ENV === 'production') {
    config.plugins.push(cssnano);
}

module.exports = config;
