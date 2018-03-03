const imgToTerm = require('./index.js')

imgToTerm({ src: 'https://media.giphy.com/media/l0MYKZKh3R6LdBvEc/giphy.gif' }, (body) => {
    console.log('auto\n', body)
});

imgToTerm({ src: 'https://media.giphy.com/media/gx54W1mSpeYMg/giphy.gif'}).then((body) => {
    console.log('Promise me auto\n', body)
});

imgToTerm({ src: 'ohno.jpg', width: '100px' }).then(body => {
    console.log('Promiseeeee \n', body)
});

imgToTerm({ src: 'oopsie.gif', height: '200px', width: 'auto' }, (body) => {
    console.log('oopsie\n', body)
});
