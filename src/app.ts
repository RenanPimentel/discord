import * as dotenv from 'dotenv';
import { Client, Message } from 'discord.js';

const client = new Client({ partials: ['MESSAGE'] });

const envConfig = dotenv.config();
const prefix = envConfig.parsed ? envConfig.parsed['PREFIX'] : '.';
const discordToken = envConfig.parsed ? envConfig.parsed['DISCORD_TOKEN'] : '';

import readyFunction from './modules/ready';

type Commands = { calendario: () => string };

const commands: Commands = {
  calendario: () => 'https://cdn.discordapp.com/attachments/773501806268645376/803225446459113472/7e79fa62-a404-4018-bb2d-458274e38108.png',
};

client.once('ready', () => readyFunction(client, prefix));

client.on('message', (msg: Message) => {
  if (msg.author.bot) return;
  
  if (!msg.content.startsWith(prefix)) return;
  
  const fullArgs = msg.content.slice(prefix.length);
  const [command, ...args] = fullArgs.split(/\s+/g);
  
  msg.channel.send(commands[command.toLowerCase()]
  ? commands[command.toLowerCase()](args)
  : 'Não pude achar esse comando');
});

if (envConfig.parsed) client.login(discordToken);

