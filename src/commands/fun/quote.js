const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
      .setName('quote')
      .setDescription('Get a random quote'),
  
    async execute(interaction) {
      try {
        const response = await fetch('https://zenquotes.io/api/random');
        const [quote] = await response.json();
  
        if (!quote || !quote.q || !quote.a) {
          return interaction.reply('Failed to fetch a quote. Please try again later.');
        }
      
      const quoteEmbed = new EmbedBuilder()
        .setColor('#00FFFF')
        .setTitle(`Random Quote`)
        .addFields({name: 'Quote', value: `${quote.q}`})
        .addFields({name: 'Quote Author', value: `${quote.a}`});

      interaction.reply({ embeds: [quoteEmbed] });
    } catch (error) {
      console.error(error);
      interaction.reply({ content: 'An error occurred while processing the command.', ephemeral: true });
    }
  },
};
