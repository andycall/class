var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: './'
	},
	module: {
        loaders: [
            { 
            	test: /\.css$/, 
            	loaders: ['style', 'css'] 
            },
            {
		        test: /\.scss$/,
		        loaders: ["style", "css", "sass"]
		    }
        ]
    },
    watch: true,
    plugins: [
	    new BrowserSyncPlugin({
	      // browse to http://localhost:3000/ during development, 
	      // ./public directory is being served 
	      host: 'localhost',
	      port: 3000,
	      server: { baseDir: './' },
	      files: '*.html'
	    })
  ]
}