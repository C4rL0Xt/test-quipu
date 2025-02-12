import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]
    ])
  });

  public newFavorite: FormControl = new FormControl('', [Validators.required]);

  constructor(
    private fb: FormBuilder
  ) { }


  get FavoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  getFieldError(field: string): string | null {
    if(!this.myForm.controls[field]) {return null;}

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'This field is required';
        
        case 'minlength':
          return 'This field must have at least 3 characters';
      }
    }

    return null;
  }

  isValidFliendArray(formArray: FormArray, i: number): boolean | null {
    return formArray.controls[i].errors && formArray.controls[i].touched;
  }

  onAddToFavorites(): void {
    if(this.newFavorite.invalid) {
      return;
    }

    const newGame = this.newFavorite.value;

    this.FavoriteGames.push(
      this.fb.control(newGame, Validators.required)
    )

    this.newFavorite.reset();
  }


  onDeleteFavorite(index: number): void {
    this.FavoriteGames.removeAt(index);
  }

  onSubmit() {

    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([]);
    this.myForm.reset();
  }
}
