// output.pathに指定するパスがOSによって異なることを防ぐために
// pathモジュールを読み込んでおく
const path = require('path');

module.exports = {
  // モードの設定
  mode: "development",
  // エントリーポイント
  entry: "./src/js/app.js",
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス
    path: path.resolve(__dirname, 'public/js')
  },
  module: {
    rules: [
      {
        // ローダーの処理対象ファイル
        test: /\.scss$/,
        // ローダーの処理対象となるディレクトリ
        include: path.resolve(__dirname, 'src/scss'),
        // 利用するローダー
        // sass-loader cssloader style-loaderの順で実行される
        use: [
          // HTMLに、style-loaderで変換したCSSのスタイルが記述された<style>タグを追加する
          'style-loader',
          // CSSをモジュールに変換する
          'css-loader',
          // SassをCSSにコンパイルする
          'sass-loader'
        ]
      },
      {
        // ローダーの処理対象ファイル
        test: /\.(png|jpg|gif)$/i,
        // ローダーの処理対象となるディレクトリ
        include: path.resolve(__dirname, 'src/images'),
        // 利用するローダー
        loader: 'url-loader'
      }
    ]
  }
}