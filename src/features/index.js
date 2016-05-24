// export function configure(config) {
//   config.globalResources('./my-component');
// }

import {MyComponent} from './my-component';
import {SecondComponent} from './second-component';

export function initialize() {
  return {
    components: [ MyComponent, SecondComponent ]
  };
}
