import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from '../notification.service';
import { Email } from '../register';



@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})

export class EmailComponent {
  public emailForm: FormGroup
  sentEmails: Email[]=[];
  constructor(
    private  notificationService: NotificationService,
    private ApiserviceService: ApiserviceService,
    private fb: FormBuilder,
    private http: HttpClient, private router: Router) {
    this.emailForm = this.fb.group({
      from: [''],
      to: [''],
      subject: [''],
      body: ['']
    })
  }

  Submit() {
    this.ApiserviceService.addEmail(this.emailForm.value)
      .subscribe({
        
        next: () => {
          alert('Email sent successfully!')
          const email = this.emailForm.value as Email;
           this.sentEmails.unshift(email); 
           this.emailForm.reset();
          this.notificationService.incrementCount();
          this.router.navigate(['/Home'])
        }
      })
  }
 
}





