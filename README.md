# next-rc-components
> Global react components for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
yarn add @jswork/next-rc-components
```

## usage
```js
// src/bootstrap.ts
import '@jswork/next-rc-components';

// src/pages/index.tsx
<nx.$rc.ife only value={ife} as="div" asProps={{ className: 'abc' }}>
  <div className="debug-red p-5.5 text-center">
    <h4>Debug info for $rc.ife</h4>
    <a href="https://vitejs.dev" target="_blank">
      <img src={reactLogo} className="logo" alt="Vite logo" />
    </a>
  </div>
</nx.$rc.ife>

<nx.$rc.list
  items={['a', 'b', 'c']}
  as="ul"
  template={({ item }) => {
    return <li key={item}>{item}</li>;
  }}
/>
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-rc-components/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-rc-components
[version-url]: https://npmjs.org/package/@jswork/next-rc-components

[license-image]: https://img.shields.io/npm/l/@jswork/next-rc-components
[license-url]: https://github.com/afeiship/next-rc-components/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-rc-components
[size-url]: https://github.com/afeiship/next-rc-components/blob/master/dist/next-rc-components.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-rc-components
[download-url]: https://www.npmjs.com/package/@jswork/next-rc-components
