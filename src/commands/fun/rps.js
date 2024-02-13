const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rps')
    .setDescription('Play Rock, Paper, Scissors against the bot')
    .addStringOption(option =>
      option.setName('choice')
        .setDescription('Your choice: Rock, Paper, or Scissors')
        .setRequired(true)),

  async execute(interaction) {
    try {
      const options = ['rock', 'paper', 'scissors'];
      const botChoice = options[Math.floor(Math.random() * options.length)];
      
      const userChoice = interaction.options.getString('choice').toLowerCase();
      
      if (!options.includes(userChoice)) {
        return interaction.reply('Invalid choice. Please choose Rock, Paper, or Scissors.');
      }
      
      let result;
      if (userChoice === botChoice) {
        result = 'It\'s a tie!';
      } else if (
        (userChoice === 'rock' && botChoice === 'scissors') ||
        (userChoice === 'paper' && botChoice === 'rock') ||
        (userChoice === 'scissors' && botChoice === 'paper')
      ) {
        result = 'You win!';
      } else {
        result = 'I win!';
      }

      const rpsEmbed = new EmbedBuilder()
        .setColor('#00FFFF')
        .setTitle(`Rock Papers Scissors`)
        .addFields({name: 'You chose', value: `${userChoice}`})
        .addFields({name: 'I chose', value: `${botChoice}`})
        .addFields({name: 'Result', value: `${result}`});

      interaction.reply({ embeds: [rpsEmbed] });      
    } catch (error) {
      console.error(error);
      interaction.reply({ content: 'An error occurred while processing the command.', ephemeral: true });
    }
  },
};

