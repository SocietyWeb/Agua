const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('dogfact')
    .setDescription('Get a random dog fact'),

  async execute(interaction) {
    try {
      const response = await fetch('http://dog-api.kinduff.com/api/facts?number=1');
      const data = await response.json();

      if (!data || !Array.isArray(data.facts) || data.facts.length === 0) {
        return interaction.reply('Failed to fetch a dog fact. Please try again later.');
      }

      const dogFact = data.facts[0];

      const dogFactEmbed = new EmbedBuilder()
        .setColor('#00FFFF')
        .setTitle('Random Dog Fact')
        .setDescription(dogFact);

      interaction.reply({ embeds: [dogFactEmbed] });
    } catch (error) {
      console.error(error);
      interaction.reply({ content: 'An error occurred while processing the command.', ephemeral: true });
    }
  },
};
