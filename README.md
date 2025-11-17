# coptic-font-converter

Lightweight npm package to convert Coptic text between different english fonts and coptic unicode.

## Installation

Install from npm:

```
npm install coptic-font-converter
```

Or with yarn:

```
yarn add coptic-font-converter
```

## Usage

```js
import { convert } from 'coptic-font-converter';
import { FontType } from 'coptic-font-converter';

const inputFont: FontType = FontType.CS_NEW_ATHANASIUS;
const outputFont: FontType = FontType.UNICODE;
const inputText = 'Ten;ynou'
console.log(convert(inputText, inputFont, outputFont));
// Example output: 'Ⲧⲉⲛⲑⲏⲛⲟⲩ'
```

## License

MIT License — free for personal and commercial use.
