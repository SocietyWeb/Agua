const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pun')
    .setDescription('Get a random pun'),

  async execute(interaction) {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/jokes/random?type=pun');
      const joke = await response.json();

      if (!joke || !joke.setup || !joke.punchline) {
        return interaction.reply('Failed to fetch a pun. Please try again later.');
      }

      const punEmbed = new EmbedBuilder()
        .setColor('#00FFFF')
        .setTitle('Random Pun')
        .addFields(
          { name: 'Setup', value: joke.setup },
          { name: 'Punchline', value: joke.punchline }
        );

      interaction.reply({ embeds: [punEmbed] });
    } catch (error) {
      console.error(error);
      interaction.reply({ content: 'An error occurred while processing the command.', ephemeral: true });
    }
  },
};
