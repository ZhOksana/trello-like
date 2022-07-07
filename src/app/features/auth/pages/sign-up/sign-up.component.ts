import {Component} from '@angular/core';
import {UsersService} from "@core/services/users.service";
import {IUsers} from "@shared/interfaces/users.interface";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  private usersService: UsersService;
  public users: IUsers[] = [];
  public upSignForm: FormGroup;
  public isHidePass: boolean = true;
  public isHidePassConf: boolean = true;
  public isAlarmForm: boolean = false;
  public isAlarmPass: boolean = false;
  public isAlarmConfPass: boolean = false;

  constructor(public fb: FormBuilder, private router: Router) {
    this.usersService = new UsersService();
    this._createForm();
  }

  private _createForm() {
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

  get firstNameForm() {
    return this.upSignForm.get('firstName');
  }

  get lastNameForm() {
    return this.upSignForm.get('lastName');
  }

  get emailForm() {
    return this.upSignForm.get('email');
  }

  get passwordForm() {
    return this.upSignForm.get('passwordGroup.password');
  }

  get passwordConfForm() {
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
      return this.isAlarmPass = false;
    } else
    return this.isAlarmPass = true;
    }

  signUp(): void {
    console.log(this.upSignForm)
    this.isAlarmConfPass = this.isAlarmPass;
    this.upSignForm.controls['passwordGroup.confirmPassword'].setErrors({'incorrect': true});
    this.upSignForm.updateValueAndValidity();
    if (this.upSignForm.invalid) {
      this.upSignForm.markAllAsTouched();
      this.isAlarmForm = true;
    }
    if (this.upSignForm.valid) {
      this.isAlarmForm = false;
      if (!this.isAlarmPass) {
        this.router.navigate(["/border"]);
      }
    }
  }
}
