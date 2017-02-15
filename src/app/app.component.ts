import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1>{{ title }}</h1>
    <h1>Root Component</h1>
    <fa-lifecycle *ngIf="!delete">
        <p>{{test}}</p>
    </fa-lifecycle>

    <button (click)="delete = true">Click to delete</button>
    <button (click)="test= 'changed value'">Change the value</button>
  `,
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I changed!';
  delete = false;
  test = 'starting value';
}
