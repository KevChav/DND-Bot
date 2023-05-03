require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType} = require('discord.js');


const commands = [
{
    name: 'ping',
    description: 'Replies withg pong!',

},
{
    name: 'd20',
    description: 'roll x amount of d20s',
    options: [
        {
            name: 'dice-num',
            description: 'the amount of dice.',
            type: ApplicationCommandOptionType.Number,
            required: true,

        },
    ]

},
{
    name: 'd2',
    description: 'roll x amount of d20s',
    options: [
        {
            name: 'dice-num',
            description: 'the amount of dice.',
            type: ApplicationCommandOptionType.Number,
            required: true,

        },
    ]

},
{
    name: 'd4',
    description: 'roll x amount of d4s',
    options: [
        {
            name: 'dice-num',
            description: 'the amount of dice.',
            type: ApplicationCommandOptionType.Number,
            required: true,

        },
    ]

},
{
    name: 'd6',
    description: 'roll x amount of d6s',
    options: [
        {
            name: 'dice-num',
            description: 'the amount of dice.',
            type: ApplicationCommandOptionType.Number,
            required: true,

        },
    ]

},
{
    name: 'd8',
    description: 'roll x amount of d8s',
    options: [
        {
            name: 'dice-num',
            description: 'the amount of dice.',
            type: ApplicationCommandOptionType.Number,
            required: true,

        },
    ]

},
{
    name: 'd10',
    description: 'roll x amount of d10s',
    options: [
        {
            name: 'dice-num',
            description: 'the amount of dice.',
            type: ApplicationCommandOptionType.Number,
            required: true,

        },
    ]

},
{
    name: 'd12',
    description: 'roll x amount of d12s',
    options: [
        {
            name: 'dice-num',
            description: 'the amount of dice.',
            type: ApplicationCommandOptionType.Number,
            required: true,

        },
    ]

},
{
    name: 'd100',
    description: 'roll x amount of d100s',
    options: [
        {
            name: 'dice-num',
            description: 'the amount of dice.',
            type: ApplicationCommandOptionType.Number,
            required: true,

        },
    ]

},

];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);


(async() =>{
    try{
        console.log('Registering Slash Commands');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands}
        )

    

        console.log('Slash commands were registered.');
    }catch (error){
        console.log(`There was an error: ${error}`);
    }
}
)();