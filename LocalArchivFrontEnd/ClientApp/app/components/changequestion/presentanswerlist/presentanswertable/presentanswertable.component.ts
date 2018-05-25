import {
    Component, Inject,
    Input,
    OnInit
} from '@angular/core';
import { Answer } from '../../../../answer/answer.model';

@Component({
    selector: '[presentanswertable]',
    templateUrl: './presentanswertable.component.html'
})
export class PresentAnswerTableComponent implements OnInit {
    @Input() answerList: Answer[];

    constructor() { }

    ngOnInit() {
    }
}
