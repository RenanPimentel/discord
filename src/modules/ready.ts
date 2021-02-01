import { Client } from 'discord.js';
import rand from './random';

import schedule from './schedule';

export default ({ user }: Client, prefix: string) => {
  const status = [
    'Momong',
    'SAS',
    'Cloud 9',
    'Galinho Chiko Liro',
    'Fogos'
  ];

  setInterval(() => {
    if (!user) return;
    const now = new Date();
    const actualStatus =
      schedule[now.getDay()](now.getHours(), now.getMinutes())
      || status[rand(0, status.length)];
    
    user.setActivity(actualStatus, { type: 'PLAYING' });
  }, 60000);
};
