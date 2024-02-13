const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('catfact')
    .setDescription('Get a random cat fact'),

  async execute(interaction) {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const fact = await response.json();

      if (!fact || !fact.fact) {
        return interaction.reply('Failed to fetch a cat fact. Please try again later.');
      }

      const catFactEmbed = new EmbedBuilder()
        .setColor('#00FFFF')
        .setTitle('Random Cat Fact')
        .setDescription(fact.fact);

      interaction.reply({ embeds: [catFactEmbed] });
    } catch (error) {
      console.error(error);
      interaction.reply({ content: 'An error occurred while processing the command.', ephemeral: true });
    }
  },
};
