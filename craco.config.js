const csvRule = {
    test: /\.csv$/,
    loader: 'csv-loader',
    options: {
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true
    }
};

module.exports = {
    webpack: {
        configure: (webpackConfig, {env, paths}) => {
            const rules = webpackConfig.module.rules;
            rules.push(csvRule);
            const ressourcRule = rules.find((r) => r?.oneOf?.find(t => t?.type === "asset/resource"));
            const toAssetRule = ressourcRule?.oneOf.find(t => t?.type === "asset/resource");
            toAssetRule.exclude.push(/\.csv$/);
            return webpackConfig;
        },
    },
    jest: {
        configure: (jestConfig, {env, paths, resolve, rootDir}) => {
            const transforms = [['^.+\\.csv$', "./jest-csv-transformer.js"]]
                .concat(
                    Object.entries(jestConfig.transform).map(([key, value]) => {
                        if (value.endsWith('fileTransform.js')) {
                            key = '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json|csv)$)';
                        }
                        return [key, value];
                    })
                );

            jestConfig.transform = Object.fromEntries(transforms);
            return jestConfig;
        },
    }
}