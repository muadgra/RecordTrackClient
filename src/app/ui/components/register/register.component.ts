import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

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
      ]]
    });
  }

  get component(){
    return this.formGroup.controls;
  }

  submitted: boolean = false;
  async onSubmit(value: any){
    this.submitted = true;
    console.log(this.component);
    if(this.formGroup.invalid){
      return;
    }
    console.log(value);
  }

}
