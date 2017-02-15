import { Component } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})

export class DatabindingComponent {
    stringinterpolation = 'this is string interpolation'

    onTest() {
        return true;
    }

    onClicked(value:string) {
        alert(value);
    }

}
