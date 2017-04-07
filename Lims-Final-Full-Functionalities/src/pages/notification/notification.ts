import { Component } from '@angular/core';
import { NotificationService } from '../../providers/notification.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {
  data:any=[];
  constructor(public navCtrl: NavController, private notificationService:NotificationService) {

  }
  getIssueDetails(){
    console.log('inside notification function');
    this.notificationService.getIssueDetails().subscribe(
      data => {
        this.data = data
        console.log(this.data);
        console.log('---->',data[0].title)
        //You Need To Return The Book {{d.title}} by <b>{{d.dueDate}}</b> !!
      },
      error => console.log(error)
    );
  }
   ngOnInit(){
    this.getIssueDetails();
  }

}
