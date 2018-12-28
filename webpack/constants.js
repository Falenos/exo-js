const path = require('path');

const paths = {
	projectFolder: path.resolve(__dirname, '..', '..'),
	root: path.resolve(__dirname, '..'),
	src: path.resolve(__dirname, '..', 'src'),
	node_modules: path.resolve(__dirname, '..', 'node_modules'),
};

const alias =	{};

module.exports = {paths, alias};
