import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  @Input() label;
  @Input() number;

  @Input() current;
  @Input() active;

  constructor() { }

  ngOnInit() {
  }

}
