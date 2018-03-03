const imgToTerm = require('./index.js');

imgToTerm({ src: 'https://media.giphy.com/media/l0MYKZKh3R6LdBvEc/giphy.gif' }, body => {
        console.log(body);
});

imgToTerm({ src: 'https://media.giphy.com/media/gx54W1mSpeYMg/giphy.gif' })
    .then(body => {
        console.log(body);
    });

imgToTerm({ src: 'ohno.jpg', width: '100px' })
    .then(body => {
        console.log(body);
    });

imgToTerm({ src: 'oopsie.gif', height: '200px', width: 'auto' }, body => {
    console.log(body);
});
