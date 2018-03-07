var through = require('through2');
const fs = require('fs');
const https = require('https');
const http = require('http');

function processBody(reader, cb) {
    const body = [];
    reader.on('readable', () => {
            const buf = reader.read();
            buf !== null ? body.push(buf) : null;
        }).on('end', () => { 
            cb(Buffer.concat(body));
        });
}

function getImg (opts, cb) {
    return opts.protocol
        .get(opts.src, resp => processBody(resp, cb))
} 

function bufToStr(buffer, { width = 'auto', height = 'auto' }) {
    formattedOpts = Object
        .entries({ inline: '1', width, height })
        .map(([k, v]) => `${k}=${v}`)
        .join(';');
    return '\u001B]1337;File=' + formattedOpts + ':' + buffer.toString('base64') + '\u0007';
}

function imgToTermCb(options = {}, cb) {
    const gotTermImgCb = buff => cb(bufToStr(buff, options))
    const match = options.src.match(/(https?):\/\//);

    if (match) {
        options = { ...options, protocol: match[1] === 'https' ? https : http }
        getImg(options, gotTermImgCb);
    } else {
        const reader = fs.createReadStream(options.src);
        processBody(reader, gotTermImgCb)
    }
}

function imgToTerm (options, cb) {
    if (cb && typeof cb === 'function') {
        return imgToTermCb(options, cb)
    }
    return new Promise(res => imgToTermCb(options, res))
}

module.exports = imgToTerm;
