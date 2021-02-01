"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    function (arg1, arg2) { return null; },
    function (hours, minutes) {
        if (hours === 7 && minutes < 45)
            return 'Biologia-Biel';
        else if (hours === 7 && minutes >= 45 || hours === 8 && minutes < 30)
            return 'Matemática-Fabrício';
        else if (hours === 8 && minutes >= 30 && minutes < 45)
            return 'Intervalo';
        else if (hours === 8 && minutes >= 45 || hours === 9 && minutes < 30)
            return 'Biologia-Biel';
        else if (hours === 9 && minutes >= 30 || hours === 10 && minutes < 15)
            return 'Técnicas de Redação';
        else if (hours === 10 && minutes >= 15)
            return 'Química-Mario';
        else if (hours === 11 && minutes < 15)
            return 'Intervalo';
        else if (hours === 11 && minutes >= 15)
            return 'Matemática-Fabrício';
        else if (hours === 12 && minutes <= 45 || hours === 13 && minutes < 45)
            return 'Intervalo';
        else if (hours === 13 && minutes >= 45 || hours === 14 && minutes < 30)
            return 'Física-Vandinho';
        else if (hours === 14 && minutes >= 30 || hours === 15 && minutes < 15)
            return 'Literatura';
        else if (hours === 15 && minutes >= 15 && minutes < 30)
            return 'Intervalo';
        else if (hours === 15 && minutes >= 30 || hours === 16)
            return 'Livro/Física/Biologia';
        else
            null;
    },
    function (hours, minutes) {
        if (hours === 7 && minutes < 45)
            return 'Gramática';
        else if (hours === 7 && minutes >= 45 || hours === 8 && minutes < 30)
            return 'Matemática-Jessé';
        else if (hours === 8 && minutes >= 30 && minutes < 45)
            return 'Intervalo';
        else if (hours === 8 && minutes >= 45 || hours === 9 && minutes < 30)
            return 'História-Eduardo';
        else if (hours === 9 && minutes >= 30 || hours === 10 && minutes < 15)
            return 'Física-Amaury';
        else if (hours === 10 && minutes >= 15)
            return 'Matemática-Fabrício';
        else if (hours === 11 && minutes < 15)
            return 'Intervalo';
        else if (hours === 11 && minutes >= 15)
            return 'Atualidades';
        else if (hours === 12 && minutes <= 45 || hours === 13 && minutes < 45)
            return 'Intervalo';
        else if (hours === 13 && minutes >= 45 || hours === 14 && minutes < 30)
            return 'Biologia-Biel';
        else if (hours === 14 && minutes >= 30 || hours === 15 && minutes < 15)
            return 'Química-Marquim';
        else if (hours === 15 && minutes >= 15 && minutes < 30)
            return 'Intervalo';
        else if (hours === 15 && minutes >= 30 || hours === 16 && minutes < 15)
            return 'Matemática-Jessé';
        else if (hours === 16 && minutes >= 15)
            return 'Inglês';
        else
            null;
    },
    function (hours, minutes) {
        if (hours === 7 && minutes < 45)
            return 'Física-Amaury';
        else if (hours === 7 && minutes >= 45 || hours === 8 && minutes < 30)
            return 'Inglês';
        else if (hours === 8 && minutes >= 30 && minutes < 45)
            return 'Intervalo';
        else if (hours === 8 && minutes >= 45 || hours === 9 && minutes < 30)
            return 'História-Armando';
        else if (hours === 9 && minutes >= 30 || hours === 10 && minutes < 15)
            return 'Geografia-Guilherme';
        else if (hours === 10 && minutes >= 15)
            return 'Física-Vandinho';
        else if (hours === 11 && minutes < 15)
            return 'Intervalo';
        else if (hours === 11 && minutes >= 15)
            return 'Química-Marquim';
        else if (hours === 12 && minutes < 45)
            return 'Biologia-Ronaldo';
        else if (hours === 13 && minutes >= 45 || hours >= 14 && hours <= 16)
            return 'Laboratório de Exercícios';
        else
            null;
    },
    function (hours, minutes) {
        if (hours === 7 && minutes < 45)
            return 'Geografia-Leo';
        else if (hours === 7 && minutes >= 45 || hours === 8 && minutes < 30)
            return 'Matemática-Fabrício';
        else if (hours === 8 && minutes >= 30 && minutes < 45)
            return 'Intervalo';
        else if (hours === 8 && minutes >= 45 || hours === 9 && minutes < 30)
            return 'Geografia-Leo';
        else if (hours === 9 && minutes >= 30 || hours === 10 && minutes < 15)
            return 'Ensino Religioso';
        else if (hours === 10 && minutes >= 15)
            return 'Gramática';
        else if (hours === 11 && minutes < 15)
            return 'Intervalo';
        else if (hours === 11 && minutes >= 15)
            return 'Artes';
        else if (hours === 12 && minutes <= 45 || hours === 13 && minutes < 45)
            return 'Intervalo';
        else if (hours === 13 && minutes >= 45 || hours === 14 && minutes < 30)
            return 'História-Edu';
        else if (hours === 14 && minutes >= 30 || hours === 15 && minutes < 15)
            return 'Física-Vandinho';
        else if (hours === 15 && minutes >= 15 && minutes < 30)
            return 'Intervalo';
        else if (hours === 15 && minutes >= 30 || hours === 16 && minutes < 15)
            return 'Literatura';
        else if (hours === 16 && minutes >= 15)
            return 'Química-Mário';
        else
            null;
    },
    function (hours, minutes) {
        if (hours === 7 && minutes < 45)
            return 'Filosofia';
        else if (hours === 7 && minutes >= 45 || hours === 8 && minutes < 30)
            return 'Técnicas de Redação';
        else if (hours === 8 && minutes >= 30 && minutes < 45)
            return 'Intervalo';
        else if (hours === 8 && minutes >= 45 || hours === 9 && minutes < 30)
            return 'Sociologia';
        else if (hours === 9 && minutes >= 30 || hours === 10 && minutes < 15)
            return 'Química-Mario';
        else if (hours === 10 && minutes >= 15)
            return 'História-Armando';
        else if (hours === 11 && minutes < 15)
            return 'Intervalo';
        else if (hours === 11 && minutes >= 15)
            return 'Biologia-Ronaldo';
        else if (hours === 12 && minutes <= 45 || hours === 13 && minutes < 45)
            return 'Técnicas de Redação';
        else if (hours === 13 && minutes >= 45 || hours === 14 && minutes < 30)
            return 'Esportes';
        else if (hours === 14 && minutes >= 30 || hours === 15 && minutes < 15)
            return 'Esportes';
        else if (hours === 15 && minutes >= 15 && minutes < 30)
            return 'Intervalo';
        else if (hours === 15 && minutes >= 30 || hours === 16 && minutes < 15)
            return 'Esportes';
        else if (hours === 16 && minutes >= 15)
            return 'Esportes';
        else
            null;
    },
    function (arg1, arg2) { return null; }
];
//# sourceMappingURL=schedule.js.map