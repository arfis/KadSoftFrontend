import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-mail-selector',
  templateUrl: './mail-selector.component.html',
  styleUrls: ['./mail-selector.component.css']
})
export class MailSelectorComponent {

  @Output() createEmitter = new EventEmitter();
  selectedMail;

  templates = ['Dakujeme za prejaveny zaujem, v prilohe posielame fakturu', 'Vdaka za nakup. Priloha obsahuje spravu'];

  onChange(event) {
    this.selectedMail = event.value;
  }

  onCreate() {
    console.log(this.selectedMail);
    this.createEmitter.emit(this.selectedMail);
  }

}
