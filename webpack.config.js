const path = require ('path');
module.exports = {
entry: './script.js',
output: {
'bundle.js',
path:
path.resolve(__dirname, 'dist')
},
};
