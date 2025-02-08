const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  /**
   * entry: 번들링이 시작되는 파일
   * resolve: 번들링의 대상이 될 파일 확장자
   * output: 번들링이 완료되면 저장될 경로와 번들링 파일 이름
   */  
  entry: { react_app: './src/index.tsx' },
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'] },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js'
  },
  mode: 'development',
/**
 * module 객체
 * webpack에 연결할 loader를 등록하는 객체
 * 파일들을 등록된 규칙에 맞게 모듈로 연결
 * 등록하는 loader의 순서가 중요하다.
 */
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // .ts 및 .tsx 파일을 처리
        loader: 'ts-loader',
        exclude: '/node_modules'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: '/node_modules'
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, {
          loader: 'css-loader',
          options: {
            // CSS 파일에 해시를 추가
            url: false,
            importLoaders: 1,
          }
        }]
      }
    ]
  },
  /**
   * plugin: 번들링된 결과물에 특정 효과를 주는 도구
   * devServer: 객체의 조건에 맞게 개발 서버를 열어준다
   */
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true,
    // overlay: true,
    devMiddleware: {
      // overlay: true를 대체할 수 있는 설정
      stats: 'minimal', // 최소한의 로그 출력
    },
    open: true
  }
}