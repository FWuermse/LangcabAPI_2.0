import {Word} from './word';
import * as moment from 'moment';

export class WordValidator {

    public static validate(word: Word, userID: string) {
        const updatedWord: Word = word;
        word.userID = userID;
        if (word.language.length > 20) {throw new Error('The entered language has too many characters.')}
        if (word.wordChinese.length > 20) {throw new Error('The entered translation has too many characters.')}
        if (word.wordEnglish.length > 20) {throw new Error('The entered word has too many characters.')}
        if (word.wordPinyin.length > 20) {throw new Error('The entered pronunciation has too many characters.')}
        updatedWord.difficulty = 2.5;
        updatedWord.calls = 0;
        updatedWord.timeCreated = moment();
        updatedWord.timePractice = moment();
        return updatedWord;
    }
}
