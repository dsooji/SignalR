import { Component, OnInit } from '@angular/core';
import { Email } from '../register';
import { ApiserviceService } from '../apiservice.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  sentEmails: Email[] = [];
  public email: string = '';

   
  

  emails: Email[] = [];
  getEmail: any;
  constructor(
    private storage: LocalStorageService,
    private emailService: ApiserviceService,
    private router: Router) { }
  ngOnInit(): void {
    this.email = this.storage.retrieve('email')
    console.log(this.email)

    this.emailService.getEmail()
      .subscribe({
        next: (emails) => {
          this.emails = emails;
        },
        error: (response) => {
          console.log(response);
        }
      })

  }


 

  deleteEmail(id: any) {
    this.emailService.deleteEmail(id)
      .subscribe(response => {
        if (response) {
          window.location.reload();
        }
      });
  }

  send() {
    this.router.navigate(['/Email']);
  }
}


