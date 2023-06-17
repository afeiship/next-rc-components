declare var wx: any;

const PiniaPluginWatch = (context) => {
  const { store, options } = context;
  const watchers = options.watch || {};
  store.$subscribe((mutation) => {
    const events = mutation.events;
    if (!events) return;
    const targetEvents = Array.isArray(events) ? events : [events];
    Object.keys(watchers).forEach((key) => {
      const target = targetEvents.find((event) => event.key === key);
      if (target) {
        const { newValue, oldValue } = target;
        watchers[key].call(store, newValue, oldValue);
      }
    });
  });
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = PiniaPluginWatch;
}

export default PiniaPluginWatch;
