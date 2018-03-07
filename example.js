const imgTermString = require('./index.js');

const src = 'https://78.media.tumblr.com/48835235536d49e35cb36957e2a0b677/tumblr_nzhnc8iUir1u8rtwro2_r1_540.jpg';
imgTermString({ src }).then(imgString => {
    console.log(imgString) 
});