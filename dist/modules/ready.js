"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var random_1 = __importDefault(require("./random"));
var schedule_1 = __importDefault(require("./schedule"));
exports.default = (function (_a, prefix) {
    var user = _a.user;
    var status = [
        'Momong',
        'SAS',
        'Cloud 9',
        'Galinho Chiko Liro',
        'Fogos'
    ];
    setInterval(function () {
        if (!user)
            return;
        var now = new Date();
        var actualStatus = schedule_1.default[now.getDay()](now.getHours(), now.getMinutes())
            || status[random_1.default(0, status.length)];
        user.setActivity(actualStatus, { type: 'PLAYING' });
    }, 60000);
});
//# sourceMappingURL=ready.js.map