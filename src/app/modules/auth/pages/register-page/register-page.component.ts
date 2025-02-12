import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { EmailServiceValidator } from 'src/app/shared/validators/email-validator.service';
// import { cantBeStrider } from 'src/app/shared/validators/validators';
// import * as customValidators from 'src/app/shared/validators/validators';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fB.group({
    name: ['',[Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    email: ['',[Validators.required, Validators.pattern(this.validatorsService.emailPattern)],[this.emailValidator]],
    username: ['',[Validators.required, this.validatorsService.cantBeStrider]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required, Validators.minLength(6)]],
  },{
    validators: [
      this.validatorsService.isFieldOneEqualFieldTwo('password','password2')
    ]
  });


  constructor(
    private fB: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailServiceValidator
  ) { }

  isValidField(field: string) {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit(){
    this.myForm.markAllAsTouched();  
  }


}
