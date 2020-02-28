const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

const img1 = PNG.sync.read(fs.readFileSync('img/version1.png'));
const img2 = PNG.sync.read(fs.readFileSync('img/version3.png'));
const {width, height} = img1;
const diff = new PNG({width, height});

pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.9});

fs.writeFileSync('img/diff1-3.png', PNG.sync.write(diff));