/**
 * Created by a619678 on 22. 6. 2017.
 */
export abstract class SortableTable<T>{

    public lastSort;
    public desc;
    public totalRecords : T[];
    public currentPage : number = 0;

    abstract setActiveRecords();

    public orderBy(type, secondType?) {

        console.log("type: " + type, " second type: " + secondType);
        console.log(this.totalRecords);
        if (this.lastSort == type) {
            //then it should be desc
            this.desc = this.desc * -1;
        }
        else {
            this.desc = 1;
        }

        this.totalRecords = this.totalRecords.sort((a: any, b: any) => {
            if ((a[type][secondType] || a[type]) > (b[type][secondType] || b[type])) {
                return 1 * this.desc;
            }
            else if ((a[type][secondType] || a[type]) < (b[type][secondType] || b[type])) {
                return -1 * this.desc;
            }
            else {
                return 0;
            }
        });

        this.lastSort = type;

        this.setActiveRecords();
    }

    public pageChanged(event:any):void {

        this.currentPage = event.page-1;
        this.setActiveRecords();
    }
}