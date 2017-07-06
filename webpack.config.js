const path = require('path');
module.exports = {
	
	entry: __dirname + "/app/assets/scripts/person.js" ,
	
	output: {

		path: __dirname + "/app/temp/scripts",

		filename: "bundle.js"

	},

	module: {
		loaders:[
		{
			loader:'babel-loader',
			query:{
			 presets:['es2015']
			},

			test: /\.js$/,

			exclude:/node_modules/
		}
		]
	}
}

// const path = require('path');
// module.exports = {
//   entry: "./app/assets/scripts/App.js",
//   output: {
//     path: path.resolve(__dirname, "./app/temp/scripts"),
//     filename: "App.js"
//     }
// }