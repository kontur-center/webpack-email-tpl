module.exports = {
    plugins: [
        "postcss-import",
        ["postcss-short", { prefix: "x" }],
        "postcss-preset-env",
        "postcss-combine-media-query",
        require('postcss-sort-media-queries')({
            sort: 'desktop-first',
        }),
        require('autoprefixer'),
        require('cssnano')({
            preset: [
                'default',
                {
                    discardComments: {
                        removeAll: true,
                    },
                }
            ]
        }),
    ],
};