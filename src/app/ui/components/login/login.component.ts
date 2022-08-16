import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login_User } from 'src/app/contracts/users/login_user';
import { AuthService } from 'src/app/services/common/auth.service';
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
    private toastr: ToastrService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
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

    const result: any = this.userService.login(loginData, () => {
      this.authService.identityCheck();
    });
    this.submitted = false;
    this.activatedRoute.queryParams.subscribe(params => {
      const returnUrl: string = params["returnUrl"];
      if(returnUrl){
        this.router.navigate([returnUrl])
      }
    })

  }

}
