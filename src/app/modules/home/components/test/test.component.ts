import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  backgroundColor: string = 'blue';

  form = new FormGroup({
    color: new FormControl('')
  });

  constructor() { 

    /*new Promise().then(valor=> {
      console.log('valor', valor);
    }).catch(err=> {});*/

    this.form.controls.color.valueChanges.subscribe((color: string | null) => {
      this.backgroundColor = color ?? 'blue';
      console.log('color', color);
    });
  }

  changeColor() {
    this.backgroundColor = this.form.value.color || 'blue';
  }

}
