# img-term-string

> From image url or file to a string that can be used to render the image in the terminal.

![](./screenshot.png)
*Currently supported on [iTerm2 >= 3](https://www.iterm2.com/downloads.html).*

## Install

```
$ npm install --save img-term-string
```

## Usage

```js
const imgTermString = require('img-term-string');

imgTermString({ src: "https://someimage.png or path/to/local/image" })
    .then(imgString => { console.log(imgString) });
// returns the image string and logs it to the terminal
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
