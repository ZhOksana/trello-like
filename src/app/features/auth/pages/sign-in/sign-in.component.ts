import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IUsers} from "@shared/interfaces/users.interface";
import {UsersService} from "@core/services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  private usersService: UsersService;
  public users: IUsers[] = [];
  public inSignForm: FormGroup;
  public isHidePass: boolean = true;
  public isAlarmForm: boolean = false;
  public isAlarmEmail: boolean = false;
  public isAlarmPass: boolean = false;

  constructor(public fb: FormBuilder, private router: Router) {
    this.usersService = new UsersService();
    this._createForm()
  }

  private _createForm() {
    this.inSignForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  get emailForm() {
    return this.inSignForm.get('email');
  }

  get passwordForm() {
    return this.inSignForm.get('password');
  }

  checkForm(form: IUsers): void {
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
