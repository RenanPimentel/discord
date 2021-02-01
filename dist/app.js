"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
var discord_js_1 = require("discord.js");
var ready_1 = __importDefault(require("./modules/ready"));
var client = new discord_js_1.Client({ partials: ['MESSAGE'] });
var envConfig = dotenv.config();
var prefix = envConfig.parsed ? envConfig.parsed['PREFIX'] : '.';
var discordToken = envConfig.parsed ? envConfig.parsed['DISCORD_TOKEN'] : '';
var commands = {
    calendario: function () { return 'https://cdn.discordapp.com/attachments/773501806268645376/803225446459113472/7e79fa62-a404-4018-bb2d-458274e38108.png'; },
};
client.once('ready', function () { return ready_1.default(client, prefix); });
client.on('message', function (msg) {
    if (msg.author.bot)
        return;
    if (!msg.content.startsWith(prefix))
        return;
    var fullArgs = msg.content.slice(prefix.length);
    var _a = fullArgs.split(/\s+/g), command = _a[0], args = _a.slice(1);
    msg.channel.send(commands[command.toLowerCase()]
        ? commands[command.toLowerCase()](args)
        : 'Não pude achar esse comando');
});
client.login(discordToken);
//# sourceMappingURL=app.js.map