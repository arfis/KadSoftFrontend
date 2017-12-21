
import {FormControl} from "@angular/forms";

export class GlobalValidator{

    static mailFormat(control: FormControl): ValidationResult {

        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

       if (control.value.length === 0 ||
            (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value)))) {
            console.log(control.value);
            console.log('error');
            return { "incorrectMailFormat": true };
        }

        else {
           console.log('returning null');
            return null;
        }
    }

}

interface ValidationResult {
    [key: string]: boolean;
}