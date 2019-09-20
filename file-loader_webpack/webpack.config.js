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
        loader: 'url-loader',
        options: {
          // 画像のファイルサイズが8KB(8*1024 = 8192)以上だったらDataURLに変換せず出力する
          limit: 8192,
          // 出力するDataURLに変換しなかった画像の名前[name].[ext]は、
          // [バンドル前のファイル名].[バンドル前のファイル拡張子]なので、
          // 今回はbackground.jpgが出力される
          name: '[name].[ext]',
          // DataURLに変換しなかった画像の出力先
          // デフォルトではoutput.pathに指定したパス(今回はpublic/js)
          // 今回はpublic/imagesに出力させたいため、public/jsからの相対パスを指定
          outputPath: '../images/',
          // 出力されるファイルからの画像の読込先
          // 今回はpublic/index.htmlからpublic/imagesの画像を読み込みたいので、
          // 以下のように指定する
          publicPath: path => './images/' + path
        }
      }
    ]
  }
};