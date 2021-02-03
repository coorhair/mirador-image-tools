const path = require('path');

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'MiradorImageTools',
      externals: {
        react: 'React',
        'react-dom': 'ReactDom',
      },
    },
  },
  webpack: {
    aliases: {
      '@material-ui/core': path.resolve('./', 'node_modules', '@material-ui/core'),
      '@material-ui/styles': path.resolve('./', 'node_modules', '@material-ui/styles'),
      react: path.resolve('./', 'node_modules', 'react'),
      'react-dom': path.resolve('./', 'node_modules', 'react-dom'),
      mirador: path.resolve('./', 'node_modules', '@regang', 'mirador')
    },
    html: {
      template: 'demo/src/index.html'
    },
    publicPath: 'https://static.brainhub.vn/',
    rules: {
      babel: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ],
          plugins: ['@babel/plugin-proposal-export-default-from']
        }
      }
    }
  },
};
