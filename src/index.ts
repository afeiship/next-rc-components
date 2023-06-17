import nx from '@jswork/next';
import { watch } from 'vue';

declare var wx: any;

const PiniaPluginWatch = (context) => {
  const { store, options } = context;
  const { watch: watchers, ...opts } = options;

  if (!watchers) return;
  const keys = Object.keys(watchers);

  keys.forEach((key) => {
    watch(() => nx.get(store.$state, key), watchers[key], {
      deep: true,
      ...opts,
    });
  });
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = PiniaPluginWatch;
}

export default PiniaPluginWatch;
