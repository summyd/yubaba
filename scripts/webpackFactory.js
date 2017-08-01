const webpack = require('webpack');

module.exports = (params) => {
  const config = Object.assign({}, params, {
    entry: params.entry,
    output: {
      path: params.path,
      filename: params.filename,
      publicPath: params.publicPath,
    },
    module: {
      strictExportPresence: true,
      loaders: [
        {
          test: /\.(css)$/,
          loader: 'style-loader!css-loader',
          name: 'assets/[name].[ext]',
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/,
          loader: 'file-loader',
          exlude: /node_moduels/,
          name: 'assets/[name].[ext]',
        },
      ],
    },
    resolve: Object.assign({
      extensions: [
        '',
        '.js',
      ],
    }, params.resolve),
    devServer: Object.assign({
      publicPath: '/',
    }, params.devServer),
    plugins: [].concat(params.plugins).concat([
      new webpack.EnvironmentPlugin(['NODE_ENV']),
    ]).filter(Boolean),
  });

  if (params.loaders) {
    config.module.loaders = config.module.loaders.concat(params.loaders);
  }

  return config;
};
