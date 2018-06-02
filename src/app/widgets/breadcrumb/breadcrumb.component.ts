import { Component }  from '@angular/core';
import { Router }             from '@angular/router';
import { BreadcrumbService }        from '../../services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {
  public display: boolean = false;
  public header: string = '';
  public description: string = '';
  public levels: Array<any> = [];
  public createLink: string;

  constructor(private breadServ: BreadcrumbService) {
    // getting the data from the services
    this.breadServ.current.subscribe((data) => {
      this.display = data.display;
      this.header = data.header;
      this.description = data.description;
      this.levels = data.levels;
      this.createLink = data.createLink;
    });
  }

}
