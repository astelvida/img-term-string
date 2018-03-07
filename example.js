const imgTermString = require('./index.js');

imgTermString({ src: 'ohno.jpg', width: '300px' })
    .then(body => {
        console.log(body);
    });

imgTermString({ src: 'https://media.giphy.com/media/gx54W1mSpeYMg/giphy.gif' })
    .then(body => {
        console.log(body);
    });

imgTermString({ src: 'https://media.giphy.com/media/l0MYKZKh3R6LdBvEc/giphy.gif' }, body => {
    console.log(body);
});

imgTermString({ src: 'oopsie.gif', height: '200px', width: 'auto' }, body => {
    console.log(body);
});

imgTermString({ src: 'https://78.media.tumblr.com/48835235536d49e35cb36957e2a0b677/tumblr_nzhnc8iUir1u8rtwro2_r1_540.jpg' }).then(imgString => {
    console.log(imgString) 
});