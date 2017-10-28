import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { MessagesService } from '../../services/messages.service';
import { LoggerService } from '../../services/logger.service';
import { Message } from '../../models/message';

@Component( {
    /* tslint:disable */
    selector: '.messagesBox',
    /* tslint:enable */
    styleUrls: ['./messages-box.component.css'],
    templateUrl: './messages-box.component.html'
})
export class MessagesBoxComponent {

}
