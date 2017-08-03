import {Directive, ElementRef, Input} from "@angular/core";
/**
 * Created by sevcik on 7/22/17.
 */
@Directive({ selector: '[myRequired]' })
export class RequiredDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
        console.log('labla: '+el.nativeElement.innerHTML);
        console.log(el.nativeElement);
    }
}