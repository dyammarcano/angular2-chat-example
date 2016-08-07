import { Component, ViewEncapsulation } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  socket: any = null;
  chatinp: string = '';

  constructor() {
    this.socket = io('http://localhost:9800');
    this.socket.on('message', (msg: string) => {
      console.log(msg);
    })
  };

  hello = 'Hello World';

  send(msg: string) {
    this.socket.emit('message', msg);
  }
}
