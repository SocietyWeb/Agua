const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('joke')
    .setDescription('Get a random joke'),

  async execute(interaction) {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const joke = await response.json();

      if (!joke || !joke.setup || !joke.punchline) {
        return interaction.reply('Failed to fetch a joke. Please try again later.');
      }

      const jokeEmbed = new EmbedBuilder()
      .setColor('#00FFFF')
      .setTitle(`Random Joke`)
      .addFields({name: 'Setup', value: joke.setup})
      .addFields({name: 'Punchline', value: joke.punchline});

      interaction.reply({ embeds: [jokeEmbed] });
    } catch (error) {
      console.error(error);
      interaction.reply({ content: 'An error occurred while processing the command.', ephemeral: true });
    }
  },
};
