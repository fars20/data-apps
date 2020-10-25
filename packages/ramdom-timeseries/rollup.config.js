export default [{
  input: 'lib/index.js',
  output: [
    {
      file: 'dist/cjs/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/es/index.js',
      format: 'es'
    },
    {
      file: 'dist/umd/index.js',
      name: 'DataAppsRandomTimeseries',
      format: 'umd'
    }
  ]
}];
