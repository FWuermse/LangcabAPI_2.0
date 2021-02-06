"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordValidator = void 0;
const moment = require("moment");
class WordValidator {
    static validate(word) {
        const updatedWord = word;
        if (word.language.length > 20) {
            throw new Error('The entered language has too many characters.');
        }
        if (word.wordChinese.length > 20) {
            throw new Error('The entered translation has too many characters.');
        }
        if (word.wordEnglish.length > 20) {
            throw new Error('The entered word has too many characters.');
        }
        if (word.wordPinyin.length > 20) {
            throw new Error('The entered pronunciation has too many characters.');
        }
        updatedWord.difficulty = 2.5;
        updatedWord.calls = 0;
        updatedWord.timeCreated = moment();
        updatedWord.timePractice = moment();
        return updatedWord;
    }
}
exports.WordValidator = WordValidator;
//# sourceMappingURL=word-validator.js.map