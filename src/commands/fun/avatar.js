const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('Get the avatar of a user')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('The user to get the avatar of')
    ),

  async execute(interaction) {
    try {
      let user = interaction.options.getUser('user') || interaction.user;
      
      const avatarEmbed = new EmbedBuilder()
        .setColor('#00FFFF')
        .setTitle(`${user.username}'s Avatar`)
        .setImage(user.displayAvatarURL({ dynamic: true, size: 1024 }));

      interaction.reply({ embeds: [avatarEmbed] });
    } catch (error) {
      console.error(error);
      interaction.reply({ content: 'An error occurred while processing the command.', ephemeral: true });
    }
  },
};
