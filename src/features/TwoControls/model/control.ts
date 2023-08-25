import {makeAutoObservable} from 'mobx';

class Control {
  value = '';

  constructor() {
    makeAutoObservable(this);
  }

  onChange = (value: string) => {
    this.value = value;
  }
}

export default Control;
