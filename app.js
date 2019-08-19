const Telegraf = require("telegraf");
const Bot = new Telegraf("920629002:AAG1NE1EopsoCecNw6OuHRIqrzSfgmppZ2E");

Bot.start ((ctx)=>{
    console.log("ID пользователя " + ctx.from.id);
    return ctx.reply("Добро пожаловать!");
});
