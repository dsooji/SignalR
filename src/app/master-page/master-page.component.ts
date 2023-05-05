import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css']
})
export class MasterPageComponent {
logout() {
  this.router.navigateByUrl('/login');
}
  
  
showPopup=false;
  notificationCount = 0; 
  hasNotification = false;
  hidden = false;
  public userName: string = '';
  private router!: Router;
 

  constructor(
    private notificationService: NotificationService
  ) {
     this.notificationService.getCount().subscribe((count) => { 
      this.notificationCount = count; 
      this.hasNotification = count > 0;
      this.showPopup=true;
      setTimeout(() => { this.showPopup = false; }, 3000);
    });


  }
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  gotoList() {
    this.router.navigate(['/home']);
  }

}
