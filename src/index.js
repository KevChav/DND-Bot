require('dotenv').config();

const { Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,

    ]
})

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online. `);
});


client.on('interactionCreate', (interaction) =>{
    if (!interaction.isChatInputCommand()) return;
    console.log(interaction.commandName);

    if (interaction.commandName ==='ping'){
        interaction.reply('pong!');
        
    }
    if (interaction.commandName ==='d20')
    {
        const mydice = interaction.options.get('dice-num').value;
        var diceResults = "";
        var diceRoll = "";
        grandTotal = 0;
        for (var i = 0; i < mydice; i++){
            
            diceRoll = Math.floor((Math.random() * 20)) + 1;
            diceResults += diceRoll + ", ";
            grandTotal += parseInt(diceRoll);

        }
        interaction.reply(`Your dice results are ${diceResults} and your grand total is ${grandTotal} !`)
    }
    if (interaction.commandName ==='d4')
    {
        const mydice = interaction.options.get('dice-num').value;
        var diceResults = "";
        var diceRoll = "";
        grandTotal = 0;
        for (var i = 0; i < mydice; i++){
            
            diceRoll = Math.floor((Math.random() * 4)) + 1;
            diceResults += diceRoll + ", ";
            grandTotal += parseInt(diceRoll);

        }
        interaction.reply(`Your dice results are ${diceResults} and your grand total is ${grandTotal} !`)
    }
    if (interaction.commandName ==='d6')
    {
        const mydice = interaction.options.get('dice-num').value;
        var diceResults = "";
        var diceRoll = "";
        grandTotal = 0;
        for (var i = 0; i < mydice; i++){
            
            diceRoll = Math.floor((Math.random() * 6)) + 1;
            diceResults += diceRoll + ", ";
            grandTotal += parseInt(diceRoll);

        }
        interaction.reply(`Your dice results are ${diceResults} and your grand total is ${grandTotal} !`)
    }
    if (interaction.commandName ==='d8')
    {
        const mydice = interaction.options.get('dice-num').value;
        var diceResults = "";
        var diceRoll = "";
        grandTotal = 0;
        for (var i = 0; i < mydice; i++){
            
            diceRoll = Math.floor((Math.random() * 8)) + 1;
            diceResults += diceRoll + ", ";
            grandTotal += parseInt(diceRoll);

        }
        interaction.reply(`Your dice results are ${diceResults} and your grand total is ${grandTotal} !`)
    }
    if (interaction.commandName ==='d10')
    {
        const mydice = interaction.options.get('dice-num').value;
        var diceResults = "";
        var diceRoll = "";
        grandTotal = 0;
        for (var i = 0; i < mydice; i++){
            
            diceRoll = Math.floor((Math.random() * 10)) + 1;
            diceResults += diceRoll + ", ";
            grandTotal += parseInt(diceRoll);

        }
        interaction.reply(`Your dice results are ${diceResults} and your grand total is ${grandTotal} !`)
    }
    if (interaction.commandName ==='d12')
    {
        const mydice = interaction.options.get('dice-num').value;
        var diceResults = "";
        var diceRoll = "";
        grandTotal = 0;
        for (var i = 0; i < mydice; i++){
            
            diceRoll = Math.floor((Math.random() * 12)) + 1;
            diceResults += diceRoll + ", ";
            grandTotal += parseInt(diceRoll);

        }
        interaction.reply(`Your dice results are ${diceResults} and your grand total is ${grandTotal} !`)
    }
    if (interaction.commandName ==='d100')
    {
        const mydice = interaction.options.get('dice-num').value;
        var diceResults = "";
        var diceRoll = "";
        grandTotal = 0;
        for (var i = 0; i < mydice; i++){
            
            diceRoll = Math.floor((Math.random() * 100)) + 1;
            diceResults += diceRoll + ", ";
            grandTotal += parseInt(diceRoll);

        }
        interaction.reply(`Your dice results are ${diceResults} and your grand total is ${grandTotal} !`)
    }
} )




client.login(process.env.TOKEN);
