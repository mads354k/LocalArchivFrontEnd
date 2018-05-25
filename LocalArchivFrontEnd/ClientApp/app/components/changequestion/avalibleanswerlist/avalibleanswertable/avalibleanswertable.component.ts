import {
    Component, Inject,
    Input,
    OnInit
} from '@angular/core';
import { Answer } from '../../../../answer/answer.model';

@Component({
    selector: '[avalibleanswertable]',
    templateUrl: './avalibleanswertable.component.html'
})
export class AvalibleAnswerTableComponent implements OnInit {
    @Input() answerList: Answer[];

    constructor() { }

    ngOnInit() {
    }
}

