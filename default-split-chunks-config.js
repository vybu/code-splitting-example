/* 
  Terminology:
  # Chunk
   it's a bundle that webpack generates, a file.
   "initial" - entry points in configuration, the ones you need to include <script> in html
   "async" - dynamic chunks created with import(), don't need to include <script> in html
  # Module
   dependency like "react", "lodash" or your own custom code
*/

module.exports = {
  chunks: 'async', // "all", "initial", "async", (chunk) => chunk.name === 'app'
  minSize: 30000, // KB, minimum size for chunk to be created (pre-min and pre-gzip)
  minChunks: 1, // minimum number of chunks that must share a module before splitting.
  maxAsyncRequests: 5, // when loading async chunk
  maxInitialRequests: 3, // when loading initial chunk
  automaticNameDelimiter: '~', // vendors~app.chunk.min.js
  name: true, // true - auto generated, can be string, two cache groups can have same name, can even have same name as entry
  cacheGroups: {
    vendors: {
      test: /[\\/]node_modules[\\/]/, // can be omitted (will select all), string, regexp -  controls which modules are selected by this cache group
      priority: -10, // if same module belongs in multiple chunks, higher priority wins
    },
    default: {
      minChunks: 2,
      priority: -20,
      reuseExistingChunk: true, // if false affects naming
    },
  },
};
