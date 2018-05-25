import {
    Component, Inject,
    Input,
    OnInit
} from '@angular/core';
import { Question } from '../../../../question/question.model';

@Component({
    selector: '[presentquestiontable]',
    templateUrl: './presentquestiontable.component.html'
})
export class PresentQuestionTableComponent implements OnInit {
    @Input() questionList: Question[];

    constructor() { }

    ngOnInit() {
    }
}
