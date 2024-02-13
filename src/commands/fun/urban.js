const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('urban')
    .setDescription('Look up a word on Urban Dictionary')
    .addStringOption(option =>
      option.setName('word')
        .setDescription('The word to look up')
        .setRequired(true)),

  async execute(interaction) {
    try {
      const wordToLookup = interaction.options.getString('word');
      const response = await fetch(`https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(wordToLookup)}`);
      const data = await response.json();

      if (!data || !data.list || data.list.length === 0) {
        return interaction.reply(`No definition found for "${wordToLookup}".`);
      }

      const firstDefinition = data.list[0];

      const urbanEmbed = new EmbedBuilder()
        .setColor('#00FFFF')
        .setTitle(`Urban Dictionary: ${wordToLookup}`)
        .setDescription(firstDefinition.definition)
        .addFields({name: 'Example', value: firstDefinition.example});

      interaction.reply({ embeds: [urbanEmbed] });
    } catch (error) {
      console.error(error);
      interaction.reply({ content: 'An error occurred while processing the command.', ephemeral: true });
    }
  },
};
