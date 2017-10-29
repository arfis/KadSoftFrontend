import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RestService} from "../../services/rest.service";

@Component({
  selector: 'app-mail-selector',
  templateUrl: './mail-selector.component.html',
  styleUrls: ['./mail-selector.component.css']
})
export class MailSelectorComponent implements OnInit {

  @Output() createEmitter = new EventEmitter();
  selectedMail;

  templates = [];

  constructor(private _restService: RestService) {

  }

  ngOnInit() {
    this._restService.getEmails().subscribe(
        results => {
          this.templates = results.map(result => result.text);
        }
    )
  }

  onChange(event) {
    this.selectedMail = event.value;
  }

  onCreate() {
    this.createEmitter.emit(this.selectedMail);
  }

}
