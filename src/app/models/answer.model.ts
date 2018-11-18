import {Result} from './result.model';
import {Step} from './step.model';

export class Answer{
    text: string;
    nextSteps: Step[];
    result: Result;
}