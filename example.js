const imgToTerm = require('./index.js')

imgToTerm({ src: 'https://media.giphy.com/media/l0MYKZKh3R6LdBvEc/giphy.gif', edit: {}}, (body) => {
    console.log('body', body)
});

imgToTerm({ src: 'https://media.giphy.com/media/gx54W1mSpeYMg/giphy.gif'}).then((body) => {
    console.log('Promise me', body)
});

imgToTerm({ src: 'ohno.jpg', edit: {}}).then(body => {
    console.log('Promiseeeee', body)
});

imgToTerm({ src: 'oopsie.gif'}, (body) => {
    console.log('oopsie', body)
});
