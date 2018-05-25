import {
    Component, Inject,
    Input,
    OnInit
} from '@angular/core';
import { Question } from '../../../../question/question.model';

@Component({
    selector: '[avaliblequestiontable]',
    templateUrl: './avaliblequestiontable.component.html'
})
export class AvalibleQuestionTableComponent implements OnInit {
    @Input() questionList: Question[];

    constructor() { }

    ngOnInit() {
    }
}

