const imgTermString = require('./index.js');

imgTermString({ src: 'https://media.giphy.com/media/l0MYKZKh3R6LdBvEc/giphy.gif' }, body => {
    console.log(body);
});

imgTermString({ src: 'https://media.giphy.com/media/gx54W1mSpeYMg/giphy.gif' })
    .then(body => {
        console.log(body);
    });

imgTermString({ src: 'ohno.jpg', width: '100px' })
    .then(body => {
        console.log(body);
    });

imgTermString({ src: 'oopsie.gif', height: '200px', width: 'auto' }, body => {
    console.log(body);
});
