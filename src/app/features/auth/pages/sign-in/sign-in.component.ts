import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IUser} from "@shared/interfaces/user.interface";
import {UsersService} from "@core/services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: [
    '../../../../styles/auth.scss',
    './sign-in.component.scss'
  ]
})

export class SignInComponent implements OnInit {

  public users: IUser[] = [];
  public inSignForm: FormGroup;
  public isHidePass: boolean = true;
  public isAlarmForm: boolean = false;
  public isAlarmEmail: boolean = false;
  public isAlarmPass: boolean = false;

  constructor(public fb: FormBuilder,
              private router: Router,
              private usersService: UsersService) {
  }

  ngOnInit() {
    this.inSignForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  get emailForm(): AbstractControl {
    return this.inSignForm.get('email');
  }

  get passwordForm(): AbstractControl {
    return this.inSignForm.get('password');
  }

  checkForm(form: IUser): void {
    this.users = this.usersService.getUsers();
    this.isAlarmEmail = !this.users.find(user => user.email === form.email);
    this.isAlarmPass = !this.users.find(user => user.password === form.password);
  }

  signIn(): void {
    if (this.inSignForm.valid) {
      this.isAlarmForm = false;
      this.checkForm(this.inSignForm.value);
      if (!this.isAlarmEmail && !this.isAlarmPass) {
        this.router.navigate(["/border"]);
      }
    } else {
      this.inSignForm.markAllAsTouched();
      this.isAlarmForm = true;
    }
  }
}
