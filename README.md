# waifu-dot-pics
[![npm version](https://badge.fury.io/js/waifu-dot-pics.svg)](https://badge.fury.io/js/waifu-dot-pics)

### Async API wrapper for [Waifu.pics](https://waifu.pics/)

## Usage

```js
const waifuPics = require("waifu-dot-pics").default
// Or using import
import waifuPics from "waifu-dot-pics";

// Returns one dance gif
await waifuPics("dance");
// Returns many gifs in a string array
await waifuPics("dance", { many: true });
await waifuPics("dance", { many: true, exclude: ["https://i.waifu.pics/wjdjwdw.jpg"] });

// Returns a nsfw gif
await waifuPics("waifu", { nsfw: true });
// Returns many nsfw gifs in a string array
await waifuPics("waifu", { nsfw: true, many: true });
await waifuPics("waifu", { nsfw: true, many: true, exclude: ["https://i.waifu.pics/wjdjwdw.jpg"] });
```

### [Source code](https://github.com/cataclym/waifu-dot-pics)

---

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/C0C3IJV8A)
