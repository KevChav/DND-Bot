require('dotenv').config();

const { Client, IntentsBitField, EmbedBuilder} = require('discord.js');

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

//comments 
client.on('interactionCreate', (interaction) =>{
    if (!interaction.isChatInputCommand()) return;
    console.log(interaction.commandName);

    if (interaction.commandName ==='recap'){
        const embed = new EmbedBuilder()
            .setTitle("Call of the NetherDeep Recap")
            .setAuthor({ name: 'Teemo', iconURL: 'https://cdn.discordapp.com/attachments/1103487850261000214/1103490444589027368/What_can_I_do3F_Emote.png' })
            .setDescription("The Midnight Suns find themselves swept up in another mystery regarding Ruidium that may give them answers to finding Alyxian, and discovering things about themselves.")
            .setColor("DarkRed")
            .setImage('https://cdn.discordapp.com/attachments/1103487850261000214/1103487929436864592/cover.png')
            .addFields(
                {   name: 'Chapter 4: The Jewel of Hope', 
                    value: "After delivering a Ruidium infused item, The Midnight Suns are in the Sigil District in Ank'harel."
                
                },
                
                {   name: '\u200B', value: '\u200B' //this is an empty zone
                
                },
                { 
                    name: 'Task:', 
                    value: 'Investigating the Life Dome in the River District',
                    inline: true,
                },
                { 
                    name: 'Currently:', 
                    value: 'Readying up with Prolix after dinner.',
                    inline: true,
                },
            )
            .setTimestamp()
            .setFooter({ text: 'End of recap'})
                interaction.reply({ embeds: [embed] });

        
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
    if (interaction.commandName ==='d2')
    {
        const mydice = interaction.options.get('dice-num').value;
        var diceResults = "";
        var diceRoll = "";
        grandTotal = 0;
        for (var i = 0; i < mydice; i++){
            
            diceRoll = Math.floor((Math.random() * 2)) + 1;
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
} );




client.login(process.env.TOKEN);
