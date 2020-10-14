require('dotenv').config();
const Discord = require("discord.js");
const axios = require('axios').default;
const client = new Discord.Client();
const regex = new RegExp(/(discord\.gift\/|discord\.com\/gifts\/|discordapp\.com\/gifts\/)[^\s]+/gim);
const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36";

client.on('ready', () => {
    console.log(`▓█████▄  ██▓  ██████  ▄████▄   ▒█████   ██▀███  ▓█████▄      ██████  ███▄    █  ██▓ ██▓███  ▓█████  ██▀███
▒██▀ ██▌▓██▒▒██    ▒ ▒██▀ ▀█  ▒██▒  ██▒▓██ ▒ ██▒▒██▀ ██▌   ▒██    ▒  ██ ▀█   █ ▓██▒▓██░  ██▒▓█   ▀ ▓██ ▒ ██▒
░██   █▌▒██▒░ ▓██▄   ▒▓█    ▄ ▒██░  ██▒▓██ ░▄█ ▒░██   █▌   ░ ▓██▄   ▓██  ▀█ ██▒▒██▒▓██░ ██▓▒▒███   ▓██ ░▄█ ▒
░▓█▄   ▌░██░  ▒   ██▒▒▓▓▄ ▄██▒▒██   ██░▒██▀▀█▄  ░▓█▄   ▌     ▒   ██▒▓██▒  ▐▌██▒░██░▒██▄█▓▒ ▒▒▓█  ▄ ▒██▀▀█▄
░▒████▓ ░██░▒██████▒▒▒ ▓███▀ ░░ ████▓▒░░██▓ ▒██▒░▒████▓    ▒██████▒▒▒██░   ▓██░░██░▒██▒ ░  ░░▒████▒░██▓ ▒██▒
 ▒▒▓  ▒ ░▓  ▒ ▒▓▒ ▒ ░░ ░▒ ▒  ░░ ▒░▒░▒░ ░ ▒▓ ░▒▓░ ▒▒▓  ▒    ▒ ▒▓▒ ▒ ░░ ▒░   ▒ ▒ ░▓  ▒▓▒░ ░  ░░░ ▒░ ░░ ▒▓ ░▒▓░
 ░ ▒  ▒  ▒ ░░ ░▒  ░ ░  ░  ▒     ░ ▒ ▒░   ░▒ ░ ▒░ ░ ▒  ▒    ░ ░▒  ░ ░░ ░░   ░ ▒░ ▒ ░░▒ ░      ░ ░  ░  ░▒ ░ ▒░
 ░ ░  ░  ▒ ░░  ░  ░  ░        ░ ░ ░ ▒    ░░   ░  ░ ░  ░    ░  ░  ░     ░   ░ ░  ▒ ░░░          ░     ░░   ░
   ░     ░        ░  ░ ░          ░ ░     ░        ░             ░           ░  ░              ░  ░   ░
 ░                   ░                           ░`);
        console.log(`Logged in as ${client.user.tag}.`);

});

client.on('message', message => {
    if(message.content.includes('discord.gift') || message.content.includes('discordapp.com/gifts/')) {
        let codes = message.content.match(regex);
        if (!codes || !codes.length) return;
        for(code of codes){
            code = code.replace(/(discord\.gift\/|discord\.com\/gifts\/|discordapp\.com\/gifts\/)/gim, '').replace(/\W/g, '');
            if(code.length<16||code.length>24){
                console.log(`Fake nitro [${code}]dropped by ${message.author.tag}! `);
                // message.reply("stop dropping fake nitro fag!");
            }
            else {
                axios({
                    method: 'POST',
                    url: `https://discordapp.com/api/v6/entitlements/gift-codes/${code}/redeem`,
                    headers:
                    {
                        'Authorization': process.env.TOKEN
                        'User-Agent': userAgent
                    }
                }).then(
                    () => console.log(`No-Scoped a nitro in ${message.guild.name}.`)
    
                ).catch(ex => console.log(`Couldn't claim Nitro. Link is expired or it's already claimed!`))

            }

        }
    }
});

client.login(process.env.TOKEN);









