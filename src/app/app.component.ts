import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value = '';
  result: number | undefined;
  onEnter(value: string) {
    if(!isNaN(+value)) {
      this.value = value;
      this.result = this.fib(parseInt(value));
    }
  }
  private fib(n: number) {
    let i: any;
    let a = 0, b = 1, f = 1;
    if(n === 0) return 0;
    if(n === 1) return 1;

    for(i = 2; i <= n; i++) {
      f = a + b;
      a = b;
      b = f;
    }
    return f;
  };



}
