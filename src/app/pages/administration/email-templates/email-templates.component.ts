import { Component, OnInit } from '@angular/core';
import {RestService} from "../../../services/rest.service";
import {NotificationService} from "../../../services/notification.service";
import {Email} from "./email.model";

@Component({
  selector: 'app-email-templates',
  templateUrl: './email-templates.component.html',
  styleUrls: ['./email-templates.component.css']
})
export class EmailTemplatesComponent implements OnInit {

  emailTemplates: Email[];
  currentEmail;

  constructor(private _restService: RestService,
              private _notificationService: NotificationService) {
  }

  ngOnInit() {
    this._restService.getEmails().subscribe(
        results => {
          this.emailTemplates = results;
        },
        error => {
          this._notificationService.error('problem pri ziskavani dat', 'Emaily');
        }
    )
  }

  createEmail() {
    this._restService.createEmail({text:this.currentEmail}).subscribe(
        result => {
          this.emailTemplates.push(result);
          this._notificationService.success('bol uspesne vytvoreny', 'Email');
        },
        error => {
          this._notificationService.error('bol uspesne vytvoreny', 'Email');
        }
    )
  }

  setUpdate(email) {

  }

  deleteEmail(email){
    this._restService.deleteEmail(email.id).subscribe(
        result => {
          this.emailTemplates.splice(this.emailTemplates.indexOf(email),1);
          this._notificationService.success('bol uspesne zmazany', 'Email');
        },
        error => {
          this._notificationService.error('nebol uspesne zmazany', 'Email');
        }
    )
  }

}
