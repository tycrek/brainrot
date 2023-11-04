[//]: # (NPM centered badge template START --------------------------------------------------)

<div align="center">

brainrot
===

[![NPMCBT badge]][NPMCBT link]

*A ROT cipher tool*

</div>

[NPMCBT badge]: https://img.shields.io/npm/v/brainrot?color=CB3837&label=%20View%20on%20NPM&logo=npm&style=for-the-badge
[NPMCBT link]: https://www.npmjs.com/package/brainrot

[//]: # (NPM centered badge template END ----------------------------------------------------)

## Usage

brainrot is a ROT cipher tool. Run it and it will do a [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) (also known as rotation cipher) on your provided input.

You can specify the number of rotations with `-r <rotations>`. If you omit this value, brainrot will do 26 iterations automatically.

For example, `npx brainrot -r 13 Caesar shift` will produce:

```
Pnrfne fuvsg
```

Without `-r`, you would get:

```
 0: Caesar shift
 1: Dbftbs tijgu
 2: Ecguct ujkhv
 3: Fdhvdu vkliw
 ...
 ...
 ...
23: Zxbpxo pefcq
24: Aycqyp qfgdr
25: Bzdrzq rghes
26: Caesar shift
```

## Lore

The code for [`cipher.ts`](https://github.com/tycrek/brainrot/blob/master/src/cipher.ts) originally came from my older project, [rot-cipher](https://github.com/tycrek-archive/rot-cipher#readme).

## License

Licensed under [ISC](https://github.com/tycrek/brainrot/blob/master/LICENSE)

Copyright (c) 2023 [tycrek](https://github.com/tycrek)
