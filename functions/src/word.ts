import * as moment from 'moment';

export interface WORD {
    calls: number;
    difficulty: number;
    language: string;
    tags: string[];
    timeCreated: moment.Moment;
    timePractice: moment.Moment;
    wordChinese: string;
    wordEnglish: string;
    wordPinyin: string;
}
