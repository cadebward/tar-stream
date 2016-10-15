const tar = require('tar')
const fstream = require('fstream')
const fs = require('fs')
const zlib = require('zlib')
const gzip = zlib.createGzip()

const packer = tar.Pack()
  .on('error', console.error)

const dest = fs.createWriteStream('files.tar.gz')

const stream = fstream.Reader({ path: 'files', type: 'Directory' })
  .on('error', console.error)
  .pipe(packer)
  .pipe(gzip)
  .pipe(dest)
