import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';

import { BuildOptions } from './types/config';

export function buildLoader(options: BuildOptions): webpack.RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoaders = buildCssLoader(options.isDev);

  return [
    fileLoader,
    svgLoader,
    tsLoader,
    cssLoaders,
  ];
}
