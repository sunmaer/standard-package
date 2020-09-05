import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import { author } from './package.json'

const license = require('rollup-plugin-license')

const config = {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    json(),
    commonjs(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**' // 只编译我们的源代码
    }),
    license({
      banner: `StandardPackage\nv<%= pkg.version %>\n@author ${
        author || ''
      } <%= moment().format('YYYY-MM-DD HH:mm:ss') %>`
    })
  ]
}

export default config
