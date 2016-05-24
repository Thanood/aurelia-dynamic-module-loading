import {inject, Container, Loader} from 'aurelia-framework';

@inject(Container, Loader)
export class App {
  _loadPluginsPromise = null;
  components = [];

  constructor(container, loader) {
    this.container = container;
    this.loader = loader;
  }

  attached() {
    return this.loadModules();
  }

  loadModules() {
    let promises = [];
    let pluginRoot = '';
    ['features'].forEach(mod => {
      promises.push(this.loader.loadModule(pluginRoot + mod + '/index')
        .then(m => {
          if (m.initialize) {
            let definitions = m.initialize();
            this.loadModule(definitions, mod);
          }
        })
        .catch(err => console.error(err)));
    });
    this._loadPluginsPromise = Promise.all(promises);
    return this._loadPluginsPromise;
  }

  loadModule(definitions, mod) {
    let components = definitions.components.map(plugin => {
      if (typeof plugin === 'function') {
        plugin = this.container.get(plugin);
        console.debug('loaded plugin from container', plugin);
      }
      // plugin._moduleId = `plugins/${moduleId}/${plugin.key}`;
      return plugin;
    });
    this.components = this.components.concat(components);
  }
}
