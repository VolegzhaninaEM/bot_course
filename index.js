const TelegramApi = require('node-telegram-bot-api');

const token = '6028212177:AAH6syNXYh5ifPaTyXzhMS6NexLURZlLdRA';

const bot = new TelegramApi(token, {polling: true});

const messages = () => {
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/start') {
            await bot.sendSticker(chatId, 'https://cdn.tlgrm.app/stickers/897/df3/897df311-e19d-4a7d-8b27-4929abbcf2cc/192/1.webp');
            return bot.sendMessage(chatId, `Добро пожаловать в телеграм-бот! Я еще маленький, но скоро смогу очень многое!`);
        }

        if (text === '/info') {
            return bot.sendMessage(chatId, `Пользователь: ${msg.from.first_name} ${msg.from.last_name}`);
        }

        console.log(msg);

        return bot.sendMessage(chatId, 'Я не понимаю тебя, попробуй еще раз')
    });
}

const myCommands = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Приветственное сообщение'},
        {command: '/info', description: 'Запросить информацию о пользователе'}
    ]);
}

const start = () => {
    messages();
    myCommands();
}

start();




