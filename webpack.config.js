const HtmlWebPack =require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: "development",
  // "production" | "development" | "none"
    // Chosen mode tells webpack to use its built-in optimizations accordingly
    output:{
        clean:true
    },
    module: {
        // configuration regarding modules
        rules: [
          // rules for modules (configure loaders, parser options, etc.)
          {
            test:/\.html$/,
            loader:'html-loader',
            options:{
                sources:false
            }
          },
          {
            test:/\.css$/,
            exclude: /styles.css$/,
            use:['style-loader', 'css-loader']
          },
          {
            test: /styles.css$/,
            use:[MiniCssExtractPlugin.loader, 'css-loader']
          },
          {
            test:/\.(png|jpe?g|gif)$/,
            loader:'file-loader',
          }
        ]
    },

    optimization: {
        
    
    },
      
    plugins: [
        new HtmlWebPack({
            title:'Mi Webpack App',
            /* filename:'index.html', */
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
          filename:'[name].css',
          ignoreOrder:false
        }),
        new CopyPlugin({
          patterns:[
            {from: 'src/assets/' , to:'assets/'}
            ]
          
        })
    ]
}