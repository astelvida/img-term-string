# img-term-string

> Transforms image to a string that can be rendered inline in the terminal.

*Currently supported on [iTerm2 >= 3](https://www.iterm2.com/downloads.html).*

## Install

```
$ npm install --save img-term-string
```

## Usage

```js
const imgTermString = require('img-term-string');

imgTermString({ src: 'https://media.giphy.com/media/gx54W1mSpeYMg/giphy.gif' })
    .then(imgString => {
        console.log(imgString);
    });

imgTermString({ 
    src: './ohno.jpg' 
    width: 'auto', 
    height: '200px'
}, imgString => {
    console.log(imgString);
    // Prints the img inline to the terminal. 
})
```

## Usage

### imgTermString(options)
Returns a the formatted image string via promise or callback.

#### src
Type: `string`

The url or file path of the image.

#### width
#### height
Type: `string` `number`
Default: `auto`
Options: `Npx` `N%` `N` `auto`

Optional arguments. Set the width and height of the image.
 - in pixels(`Npx`)
 - as a % of the terminal view(`N%`)
 - number of char cells(`N`)
 - autoscale based on the image dimensions(`auto`).<br>

## License

MIT ©