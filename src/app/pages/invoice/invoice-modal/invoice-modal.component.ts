import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {Invoice} from "../invoice.model";
import {ModalDirective} from "ngx-bootstrap";
import {RestService} from "../../../services/rest.service";

@Component({
  selector: 'app-invoice-modal',
  templateUrl: './invoice-modal.component.html',
  styleUrls: ['./invoice-modal.component.css'],
})

export class InvoiceModalComponent implements OnInit, OnChanges {
  @Input()
  showModal;

  @Input()
  invoice: Invoice;

  @Output()
  proceedRequest = new EventEmitter<Invoice>();

  isModalShown: boolean = false;
  templates: string[] = ["Dakujeme za zkupenie produktu", "Nedakujeme za zakupenie produktu"];
  selectedMailTemplate : string = this.templates[0];

  @ViewChild('staticModal') public autoShownModal: ModalDirective;

  ngOnChanges(changes: any): void {
    if (changes.showModal && this.showModal) {
      this.showModalWindow();
    }
  }

  selectTemplate(template) {
    this.selectedMailTemplate = template;
  }

  showModalWindow() {
    console.log("trying to show modal:");
    console.log(this.invoice);
    // this.isModalShown = true;

  }

  constructor(private restSrv : RestService) {
    this.restSrv.getEmails().subscribe(
        emails => {
          this.templates = emails;
        }
    );
  }

  returnOrderToParent(staticModal, mailText) {
    //this.order.invoice.emailText = mailText;
    this.invoice.emailText = this.selectedMailTemplate;

    if (mailText == null) {
      this.proceedRequest.next(null);
    }
    else {
      //staticModal.hide();
      // this.isModalShown = false;
      this.proceedRequest.next(this.invoice);
    }
  }

  ngOnInit() {

  }
}