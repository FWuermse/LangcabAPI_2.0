import * as moment from 'moment';

export interface WORD {
    userID: string;
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

export class Word implements WORD {
    constructor(userID: string, calls: number, difficulty: number, language: string, tags: string[], timeCreated: moment.Moment, timePractice: moment.Moment, wordChinese: string, wordEnglish: string, wordPinyin: string) {
        this.userID = userID
        this.calls = calls;
        this.difficulty = difficulty;
        this.language = language;
        this.tags = tags;
        this.timeCreated = timeCreated;
        this.timePractice = timePractice;
        this.wordChinese = wordChinese;
        this.wordEnglish = wordEnglish;
        this.wordPinyin = wordPinyin;
    }

    userID: string;
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
