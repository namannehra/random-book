'use strict'

const clipboardy = require('clipboardy')
const fs = require('fs')
const minify = require('babel-minify')
const path = require('path')

const src = fs.readFileSync(path.resolve(process.cwd(), './src/index.js'))
const {code} = minify(`
    (() => {
        'use strict'
        ${src}
    })()
`)
clipboardy.writeSync('javascript:' + code)
console.log('Copied to clipboard')