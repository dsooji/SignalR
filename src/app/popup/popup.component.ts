import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent  implements OnInit{
emails: any;
latestEmail: any;

constructor(
  private storage: LocalStorageService,
  private emailService: ApiserviceService,
  private router: Router) { }

  ngOnInit(): void {
   
    

    this.emailService.getEmail()
      .subscribe({
        next: (emails) => {
          if (emails.length > 0) {
            this.latestEmail = emails[0];
          }
        }
        
      })
    }
  }
