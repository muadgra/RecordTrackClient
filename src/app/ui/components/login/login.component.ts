import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Login_User } from 'src/app/contracts/users/login_user';
import { UserService } from 'src/app/services/common/models/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  formGroup!: FormGroup;
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      usernameOrEmail: ["", [
        Validators.required
      ]],
      password: ["", [
        Validators.required
      ]],
    })
  }

  get component() {
    return this.formGroup.controls;
  }

  submitted: boolean = false;
  async login(loginData: any) {
    this.submitted = true;

    const result: any = this.userService.login(loginData);
    console.log(result);
    this.submitted = false;


  }

}
