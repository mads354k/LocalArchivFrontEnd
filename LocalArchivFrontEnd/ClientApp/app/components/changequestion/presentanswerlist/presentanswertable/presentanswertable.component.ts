import {
    Component, Inject,
    Input,
    OnInit
} from '@angular/core';
import { AnswerListItem } from '../../../../answerlistitem/answerlistitem.model';

@Component({
    selector: '[presentanswertable]',
    templateUrl: './presentanswertable.component.html'
})
export class PresentAnswerTableComponent implements OnInit {
    @Input() answerList: AnswerListItem[];

    constructor() { }

    ngOnInit() {
    }
}
