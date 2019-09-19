// output.pathに指定するパスがOSによって異なることを防ぐために
// pathモジュールを読み込んでおく
const path = require('path');

module.exports = {
  // モードの設定 (モードを指定しないとwebpack実行時に警告が出る)
  mode: 'development',
  // エントリーポイント(モジュール間の依存関係の解析を開始するファイル)の設定
  entry: './src/js/app.js',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス（絶対パスを指定しないとエラーが出るので注意）
    path: path.resolve(__dirname, 'public/js')
  }
}