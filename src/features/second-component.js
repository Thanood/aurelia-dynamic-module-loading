import {inject, LogManager} from 'aurelia-framework';

@inject(LogManager)
export class SecondComponent {
  constructor(logManager) {
    this.log = logManager.getLogger('second-component');
  }
  attached() {
    this.log.debug('attached');
  }
}
