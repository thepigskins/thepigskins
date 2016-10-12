const path = require('path');
const PATHS = {
	app: './client/src/index.js',
	dist: path.join(__dirname, 'client', 'dist'),
};

module.exports = {
  entry: {
  javascript: PATHS.app,
  },
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
  	loaders: [{
  		exclude: /node_modules/,
  		loader: 'babel',
  		query: {
  			presets: ['react', 'es2015'],
  	  },
  	}],
  },
  watch: true,
  devTool: 'source-map',
  devServer: {
  	contentBase: PATHS.dist,
  },
  resolve: {
  	extensions: ['', '.js', '.jsx'],
  },
}

//Path is looking to serve HTML and CSS, these need to be inside the same 
//File structure as bundle due to the output path of bundle.js