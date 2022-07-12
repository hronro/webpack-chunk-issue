# Webpack issue

## Steps to reproduce

- Run `pnpm i && pnpm build`
- Check `dist/main.c1ecce6e.js`. In the bottom of the file, it contains something like this:

```js
import * as __webpack_chunk_0__ from "./style.e9792867.js";
```

However, `style.e9792867.js` does not exsit.