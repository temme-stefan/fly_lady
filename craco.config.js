const csvRule = {
    test: /\.csv$/,
    loader: 'csv-loader',
    options: {
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true
    }
};

module.exports={
    webpack:{
        configure: (webpackConfig, { env, paths }) => {
            const rules = webpackConfig.module.rules;
            rules.push(csvRule);
            const ressourcRule = rules.find((r)=>r?.oneOf?.find(t=>t?.type==="asset/resource")) ;
            const toAssetRule = ressourcRule?.oneOf.find(t=>t?.type==="asset/resource");
            toAssetRule.exclude.push(/\.csv$/);
            return webpackConfig;
        },
    },
    // jest:{
    //     configure: (jestConfig, { env, paths, resolve, rootDir }) => {
    //         jestConfig.transform['^.+\\.csv$'] = "./jest-csv-transformer.js";
    //         return jestConfig;
    //     },
    // }
}