import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default {
	mode: 'production',

	devtool: false,

	entry: './src/index.js',

	experiments: {
		outputModule: true,
	},

	output: {
		path: new URL('./dist', import.meta.url).pathname,
		publicPath: '/',
		filename: '[name].[chunkhash:8].js',
		chunkFilename: '[name].chunk.[chunkhash:8].js',
		assetModuleFilename: '[hash][ext][query]',
		module: true,
		libraryTarget: 'module',
		chunkFormat: 'module',
		chunkLoading: 'import',
		environment: {
			dynamicImport: true,
			module: true,
		},
	},

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
				],
			},
		],
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.[contenthash].css',
			chunkFilename: '[id].[contenthash].css',
			runtime: false,
		}),
	],

	optimization: {
		splitChunks: {
			chunks: 'all',

			cacheGroups: {
				style: {
					name: 'style',
					type: 'css/mini-extract',
					chunks: 'all',
					enforce: true,
				},

				defaultVendors: {
					name: 'vendor',
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					chunks: 'initial',
					reuseExistingChunk: true,
				},

				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
			},
		},

		runtimeChunk: {
			name: 'runtime',
		},

		// currently Webpack has bugs when setting concatenateModules to true while produce ES Module output.
		// concatenateModules: false,

		minimize: false,
	}
}