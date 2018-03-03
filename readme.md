# img-term-string

> Transforms image to a string that can be rendered inline in the terminal.

*Currently supported on [iTerm2 >= 3](https://www.iterm2.com/downloads.html).*

## Install

```
$ npm install --save img-term-string
```

## Usage

```
const imgTermString = require('img-term-string');

imgTermString({ src: 'https://media.giphy.com/media/gx54W1mSpeYMg/giphy.gif' })
    .then(imgString => {
        console.log(imgString);
    });

imgTermString({ src: './ohno.jpg' width: 'auto', height: '200px' }, imgString => {
    console.log(imgString);
    // Prints the img inline to the terminal. 
})

Can be used both with promises and callbacks.
```

## License

MIT ©