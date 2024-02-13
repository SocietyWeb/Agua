const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { promisify } = require('util');
const figlet = require('figlet');

const figletAsync = promisify(figlet);

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ascii')
    .setDescription('Convert text to ASCII art')
    .addStringOption(option =>
      option.setName('text')
        .setDescription('Text to convert')
        .setRequired(true)
    ),
  
  async execute(interaction) {
    try {
      const text = interaction.options.getString('text');
      const asciiArt = await figletAsync(text);

      if (asciiArt.length > 2000) {
        return interaction.reply({ content: 'The ASCII art is too long to display.', ephemeral: true });
      }

      const embed = new EmbedBuilder()
        .setColor('#00FFFF')
        .setDescription(`\`\`\`${asciiArt}\`\`\``);

      interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      interaction.reply({ content: 'An error occurred while processing the command.', ephemeral: true });
    }
  },
};
