const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('advice')
    .setDescription('Get a random piece of advice'),

  async execute(interaction) {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();

      if (!data || !data.slip || !data.slip.advice) {
        return interaction.reply('Failed to fetch a piece of advice. Please try again later.');
      }

      const advice = data.slip.advice;

      const adviceEmbed = new EmbedBuilder()
        .setColor('#00FFFF')
        .setTitle('Random Advice')
        .setDescription(advice);

      interaction.reply({ embeds: [adviceEmbed] });
    } catch (error) {
      console.error(error);
      interaction.reply({ content: 'An error occurred while processing the command.', ephemeral: true });
    }
  },
};
