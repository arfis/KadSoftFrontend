import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-table-panel',
  templateUrl: './table-panel.component.html',
  styleUrls: ['./table-panel.component.css']
})
export class TablePanelComponent implements AfterViewInit {

  @Output() onCreate = new EventEmitter();
  @Output() onSearchChange = new EventEmitter<string>();

  @Input() canCreate = false;

  @ViewChild('input') input

  constructor() { }

  ngAfterViewInit() {
    Observable
        .fromEvent(this.input.nativeElement, 'keyup')
        .debounceTime(150)
        .distinctUntilChanged()
        .subscribe(
            () => {
              this.onSearchChange.emit(this.input.nativeElement.value);
            }
        )
  }

  toggleCreation() {
      this.onCreate.emit();
  }

}
