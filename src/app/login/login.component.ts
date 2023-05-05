import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { LocalStorageService,SessionStorageService } from 'ngx-webstorage';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public isLogin: boolean = false;

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash"
  loginForm!: FormGroup;
  Auth: any;



  constructor(
    private storage:LocalStorageService,
    private fb: FormBuilder,
    private service: ApiserviceService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    console.log("test")
    this.service.getRegisterUsers().subscribe(res => {
      console.log(res, "test")
    })
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }



  OnSubmit() {
    this.service.getRegisterUsers().subscribe((res: any) => {
      console.log(res)
      const user = res.find((a: any) => { return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password });
      if (user) {
        console.log(user)
        this.storage.store('email', user.email);
        this.router.navigate(['Home']); window.alert('successfully login');

      } else {
        window.alert('please check credentials once')
      }
    })
  }

}
