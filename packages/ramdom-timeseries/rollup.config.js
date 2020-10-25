export default [{
  input: 'lib/index.js',
  output: [
    {
      file: 'cjs/index.js',
      format: 'cjs'
    },
    {
      file: 'es/index.js',
      format: 'es'
    },
    {
      file: 'umd/index.js',
      name: 'DataAppsRandomTimeseries',
      format: 'umd'
    }
  ]
}];
