# pinia-plugin-watch
> The easiest way to watch for your Pinia State.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/pinia-plugin-watch
```

## usage
```js
import piniaPluginWatch from '@jswork/pinia-plugin-watch';

// ======== main.js  ======
export function createApp() {
  const app = createSSRApp(App);
  const pinia = createPinia();

  pinia.use(PiniaStateTree);
  pinia.use(piniaPluginWatch);
  //...
}

// ======== stores/auth.js ======
import { defineStore } from "pinia";

export default defineStore("auth", {
  state: () => ({ profile: null, other: null }),
  watch: {
    profile: (newValue, oldValue) => {
      if (newValue) console.log("profile changed", newValue);
      else console.log("profile removed", oldValue);
    },
  },
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/pinia-plugin-watch/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/pinia-plugin-watch
[version-url]: https://npmjs.org/package/@jswork/pinia-plugin-watch

[license-image]: https://img.shields.io/npm/l/@jswork/pinia-plugin-watch
[license-url]: https://github.com/afeiship/pinia-plugin-watch/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/pinia-plugin-watch
[size-url]: https://github.com/afeiship/pinia-plugin-watch/blob/master/dist/pinia-plugin-watch.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/pinia-plugin-watch
[download-url]: https://www.npmjs.com/package/@jswork/pinia-plugin-watch
