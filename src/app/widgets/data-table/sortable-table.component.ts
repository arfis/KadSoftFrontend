/**
 * Created by a619678 on 22. 6. 2017.
 */
import {isUndefined} from "util";

export abstract class SortableTable<T> {

    public lastSort;
    public desc;
    public totalRecords: T[];
    public currentPage: number = 0;

    abstract setActiveRecords();

    public orderBy(type, secondType?) {

        if (this.lastSort == type) {
            //then it should be desc
            this.desc = this.desc * -1;
        }
        else {
            this.desc = 1;
        }

        console.log('first ordering type: ' + type + ' second ordering type: ' + secondType);
        this.totalRecords = this.totalRecords.sort((a: any, b: any) => {

            if (isUndefined(secondType)) {
                console.log('first type of ordering');
                if ((a[type]) > (b[type])) {
                    return 1 * this.desc;
                }
                else if ((a[type]) < (b[type])) {
                    return -1 * this.desc;
                }
                else {
                    return 0;
                }
            } else {
                console.log('second type of ordering');
                if ((a[type][secondType]) > (b[type][secondType])) {
                    return 1 * this.desc;
                }
                else if ((a[type][secondType]) < (b[type][secondType])) {
                    return -1 * this.desc;
                }
                else {
                    return 0;
                }
            }

        });

        this.lastSort = type;

        this.setActiveRecords();
    }

    public pageChanged(event: any): void {

        this.currentPage = event.page - 1;
        this.setActiveRecords();
    }
}