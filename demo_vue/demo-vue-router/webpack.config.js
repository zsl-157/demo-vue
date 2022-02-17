var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './',
    filename: 'build.js',
    

    
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader:'css-loader',
            options: {
        
              publicPath: '/' //采用根路径
          }
          }
        ],
      }, 
      {// 对图片资源文件使用url-loader
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          // 小于10K的图片转成base64编码的dataURL字符串写到代码中
          limit: 10000,
          // 其他的图片转移到静态资源文件夹
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          publicPath: '/' 
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    port:8080,
    proxy: {
      '/api/': {
        target: 'http://192.168.3.84:8081',
        
        
        changeOrigin: true,     // target是域名的话，需要这个参数，
        secure: false,          // 设置支持https协议的代理
      },
      
    }
  },
  plugins:[
    new htmlWebpackPlugin({
      template:path.resolve(__dirname,'index.html')
    }),
    
  ],
  
  
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
