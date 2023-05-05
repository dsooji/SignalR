import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

import { Register } from '../register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  public registerForm!: FormGroup;
  FirstName: any;
  LastName: any;
  UserName: any;

  Email: any;
  Password: any;
  service: any;
  myForm: FormGroup<{ FirstName: FormControl<any>; }> | undefined;
  constructor(
    private fb: FormBuilder,
    private registerService: ApiserviceService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],

    })
  }



  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "Password";
  }

  OnRegister() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      this.registerService.createuser(this.registerForm.value).subscribe(response => {
        console.log(response)
        window.alert('Successfully Done');
        this.registerForm.reset();
      });
    } else {
      console.log("else")
      Validators.nullValidator(this.registerForm)
      alert("your form is invalid")
    }
  }
  // createuser(register: Register) {
  //   this.registerService.createuser(register).subscribe(
  //     ()=>
  //     {
  //       this.registerForm.reset();
  //     }
  //   )
  // }


  // addRegister() {
  //   var Reg = {
  //     FirstName: this.FirstName,
  //     LastName: this. LastName,
  //     UserName: this. UserName,
  //     Email: this. Email,
  //     Password: this. Password,

  //   };
  //   this.service.addRegister(Reg).subscribe(() => {
  //     alert('Successfully Done')
  //   });

  // }

}
