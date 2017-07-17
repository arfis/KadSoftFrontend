/**
 * Created by sevcik on 7/6/17.
 */
import {
    Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
    ViewChild
} from '@angular/core';
import {Order} from "./order.model";
import {ModalDirective} from "ng2-bootstrap";
import {RestService} from "../../services/rest.service";

@Component({
    selector: 'order-modal',
    template: `
        <div *ngIf="showModal" [config]="{ show: true }" class="modal fade" bsModal
             #staticModal="bs-modal"
             tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title pull-left">Notifikačný mail</h4>

                        <div class="modal-body">
                            <div class="dropdown center-block">
                                <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                                    {{selectedMailTemplate || 'Vyberte sablonu'}}
                                    <span class="caret"></span></button>
                                <ul class="dropdown-menu animated-dropdown-menu">
                                    <li *ngFor="let template of templates">
                                        <a (click)="selectTemplate(template.text)">{{template.text}}</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="form-group">
                                <label for="mailText">Text Notifikačného mailu:</label>
                                <input #mailText [ngModel]="selectedMailTemplate" type="text" id="mailText"
                                       class="form-control"/>
                            </div>

                            <button class="btn btn-default" (click)="returnOrderToParent(staticModal, mailText)">
                                Create
                            </button>
                            <button class="btn btn-danger" type="button" aria-label="Close"
                                    (click)="returnOrderToParent(staticModal, null)">
                                Zrusit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`

})

export class OrderModal implements OnInit, OnChanges {
    @Input()
    showModal;

    @Input()
    order: Order;

    @Output()
    proceedRequest = new EventEmitter<Order>();

    private isModalShown: boolean = false;
    private templates: string[] = ["Dakujeme za zkupenie produktu", "Nedakujeme za zakupenie produktu"];
    private selectedMailTemplate : string = this.templates[0];

    @ViewChild('staticModal') public autoShownModal: ModalDirective;

    ngOnChanges(changes: any): void {
        if (changes.showModal && this.showModal) {
            console.log("change, show modal");
            this.showModalWindow();
        }
    }

    selectTemplate(template) {
        this.selectedMailTemplate = template;
    }

    showModalWindow() {
        console.log("trying to show modal:");
        console.log(this.order);
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
        this.order.invoice.emailText = this.selectedMailTemplate;

        if (mailText == null) {
            this.proceedRequest.next(null);
        }
        else {
            //staticModal.hide();
            // this.isModalShown = false;
            this.proceedRequest.next(this.order);
        }
    }

    ngOnInit() {

    }
}