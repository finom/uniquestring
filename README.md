# uniquestring [![npm version](https://badge.fury.io/js/uniquestring.svg)](https://badge.fury.io/js/uniquestring)
Super simple function which generates pseudo-random string based on current timestamp and ``Math.random`` call.

```js
import uniqueString from 'uniquestring';

const unique = uniqueString(); // returns something similar to 1bl73a23duqt
const uniquePrefixed = uniqueString('foo_'); // returns something similar to foo_1bl73a23duqt
```

### Installing
```
npm install uniquestring
```
or
```html
<script src="path/to/uniquestring.js"></script>
```
