const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('coinflip')
    .setDescription('Flip a coin to get heads or tails'),

  async execute(interaction) {
    try {
      const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
      interaction.reply(`The coin landed on **${result}**!`);
    } catch (error) {
      console.error(error);
      interaction.reply({ content: 'An error occurred while processing the command.', ephemeral: true });
    }
  },
};
