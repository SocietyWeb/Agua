const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fact')
    .setDescription('Get a random fact'),

  async execute(interaction) {
    try {
      const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
      const data = await response.json();

      if (!data || !data.text) {
        return interaction.reply('Failed to fetch a fact. Please try again later.');
      }

      const factEmbed = new EmbedBuilder()
        .setColor('#00FFFF')
        .setTitle('Random Fact')
        .setDescription(data.text);

      interaction.reply({ embeds: [factEmbed] });
    } catch (error) {
      console.error(error);
      interaction.reply({ content: 'An error occurred while processing the command.', ephemeral: true });
    }
  },
};
