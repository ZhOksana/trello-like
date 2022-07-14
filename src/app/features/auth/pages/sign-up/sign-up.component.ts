import {Component, OnInit} from '@angular/core';
import {IUser} from "@shared/interfaces/user.interface";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: [
    '../../../../styles/auth.scss',
    './sign-up.component.scss'
  ]
})

export class SignUpComponent implements OnInit {


  public users: IUser[] = [];
  public upSignForm: FormGroup;
  public isHidePass: boolean = true;
  public isHidePassConf: boolean = true;
  public isAlarmForm: boolean = false;
  public isAlarmPass: boolean = false;

  constructor(public fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.upSignForm = this.fb.group({
      firstName: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]{2,20}$/), Validators.minLength(2), Validators.maxLength(20)]],
      lastName: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]{2,20}$/), Validators.minLength(2), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],
      passwordGroup: this.fb.group({
          password: [null, [Validators.required, control => this.validatePasswords(control, 'password1'), Validators.minLength(4)]],
          confirmPassword: [null, [Validators.required, control => this.validatePasswords(control, 'password2')]]
        }
      )
    })
  }

  get firstNameForm(): AbstractControl {
    return this.upSignForm.get('firstName');
  }

  get lastNameForm(): AbstractControl {
    return this.upSignForm.get('lastName');
  }

  get emailForm(): AbstractControl {
    return this.upSignForm.get('email');
  }

  get passwordForm(): AbstractControl {
    return this.upSignForm.get('passwordGroup.password');
  }

  get passwordConfForm(): AbstractControl {
    return this.upSignForm.get('passwordGroup.confirmPassword');
  }

  get password(): AbstractControl {
    return this.upSignForm.get('passwordGroup.password');
  }

  get confirmPassword(): AbstractControl {
    return this.upSignForm.get('passwordGroup.confirmPassword');
  }

  validatePasswords(control: AbstractControl, name: string) {
    if (
      this.upSignForm === undefined ||
      this.password.value === '' ||
      this.confirmPassword.value === ''
    ) {
      return null;
    } else if (this.password.value === this.confirmPassword.value) {
      if (
        name === 'password' &&
        this.confirmPassword.hasError('passwordMismatch')
      ) {
        this.password.setErrors(null);
        this.confirmPassword.updateValueAndValidity();
      } else if (
        name === 'confirmPassword' &&
        this.password.hasError('passwordMismatch')
      ) {
        this.confirmPassword.setErrors(null);
        this.password.updateValueAndValidity();
      }
      this.isAlarmPass = false;
    } else
      this.isAlarmPass = true;
  }

  signUp(): void {
    if (this.isAlarmPass) {
      this.confirmPassword.setErrors({'incorrect': true});
      this.password.updateValueAndValidity();
    }
    if (this.upSignForm.invalid) {
      this.upSignForm.markAllAsTouched();
      this.isAlarmForm = true;
    } else if (this.upSignForm.valid) {
      this.isAlarmForm = false;
      this.router.navigate(["/border"]);
    }
  }
}
