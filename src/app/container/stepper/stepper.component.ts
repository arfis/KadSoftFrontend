import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  @Input() steps;
  @Input() activeSteps;
  @Input() currentStep;

  @Output('onChange') onClick = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  itemClick(step) {
    if (this.activeSteps[this.getMethodName(step)]) {
      this.onClick.emit(step);
    }
  }

  isStepActive(step) {
    let methodName = this.getMethodName(step);
    return !!this.activeSteps[methodName];
  }

  isStepCurrent(step) {
    return step === this.currentStep;
  }

  getMethodName(step) {
    return 'to' + this.capitalizeFirstLetter(step);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
