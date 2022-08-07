import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Create_User } from 'src/app/contracts/users/create_user';
import { UserService } from 'src/app/services/common/models/user.service';
import UserInformation from 'src/app/types/models/UserInformation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private userService : UserService,
    private toastr: ToastrService
    ) { }

  formGroup!: FormGroup;

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ["", [
        Validators.required,
        Validators.maxLength(30)
      ]],
      surname: ["", [
        Validators.required,
        Validators.maxLength(30)
      ]],
      username: ["", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]],
      email: ["", [
        Validators.email,
        Validators.required,
        Validators.maxLength(50)
      ]],
      password: ["", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]],
      passwordConfirm: ["", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]]},
      {
        validators: (group: AbstractControl): ValidationErrors | null => {
          let password = group.get("password")?.value;
          let passwordConfirm = group.get("passwordConfirm")?.value;
          
          return password === passwordConfirm ? null : {notSame: true };
        }
      }
    );
  }

  get component(){
    return this.formGroup.controls;
  }

  submitted: boolean = false;
  async onSubmit(userData: UserInformation){
    this.submitted = true;
    console.log(userData);
    const result: Create_User = await this.userService.create(userData);
    return result.success ? this.toastr.success('User has been created!') : this.toastr.error('Error while creating user...');
  }

}
