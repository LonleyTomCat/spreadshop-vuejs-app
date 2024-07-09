module.exports = {
  devServer: {
    proxy: {
      '/spreadshop': {
        target: 'https://fussel-streetwear.myspreadshop.net',
        changeOrigin: true,
        pathRewrite: { '^/spreadshop': '' },
      },
    },
  },
};
