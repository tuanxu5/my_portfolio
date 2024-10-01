const path = require("path")

module.exports = {
  mode: "production", // hoặc 'development'
  entry: "./src/index.js", // điểm vào của ứng dụng
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    splitChunks: {
      chunks: "all", // có thể là 'all', 'async', hoặc 'initial'
      minSize: 20000, // Kích thước tối thiểu của chunk để tách
      maxSize: 70000, // Kích thước tối đa của chunk
      minChunks: 1, // Số lần chunk cần được sử dụng trước khi tách
      maxAsyncRequests: 30, // Số yêu cầu tối đa cho các chunk bất đồng bộ
      maxInitialRequests: 30, // Số yêu cầu tối đa cho các chunk ban đầu
      automaticNameDelimiter: "~", // Ký tự phân tách cho tên chunk
      name: true, // Tự động đặt tên cho chunk
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
          priority: -10 // Độ ưu tiên thấp hơn
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}
