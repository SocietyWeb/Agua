const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('compliment')
    .setDescription('Receive a random compliment'),

  async execute(interaction) {
    try {
      const compliments = [
        "You're amazing!",
        "You're so kind-hearted.",
        "You have a great sense of humor!",
        "You're a fantastic friend.",
        "You're an inspiration to others.",
        "You're doing great things!",
        "You're appreciated.",
        "You're beautiful inside and out.",
        "You make the world a better place.",
        "You're valued and loved.",
        "You have a contagious smile.",
        "You're always there for others.",
        "You radiate positivity.",
        "You have a heart of gold.",
        "You're incredibly thoughtful.",
        "You have a great sense of style.",
        "You're a true gem.",
        "You're a ray of sunshine.",
        "You have a wonderful laugh.",
        "You're an excellent listener.",
        "You're so talented!",
        "You're a beacon of hope.",
        "You have a bright future ahead.",
        "You're full of creativity.",
        "You're always so positive.",
        "You have a fantastic personality.",
        "You light up the room.",
        "You have a unique perspective.",
        "You're a true role model.",
        "You're exceptionally kind.",
        "You have a heartwarming presence.",
        "You're incredibly generous.",
        "You're so supportive.",
        "You have a beautiful soul.",
        "You're a breath of fresh air.",
        "You have a way with words.",
        "You're a true friend indeed.",
        "You're so dependable.",
        "You're one-of-a-kind.",
        "You have an infectious enthusiasm.",
        "You're always so understanding.",
        "You're a joy to be around.",
        "You're incredibly graceful.",
        "You're an incredible human being.",
        "You're filled with compassion.",
        "You have a positive impact on others.",
        "You're so easy to talk to.",
        "You have a heartwarming smile.",
        "You're a source of strength.",
        "You're an absolute delight.",
        "You have a beautiful spirit.",
        "You're filled with endless potential.",
        "You're an inspiration to many.",
        "You're a true blessing.",
        "You have a heartwarming aura.",
        "You're always so encouraging.",
        "You're incredibly resilient.",
        "You're a true hero.",
        "You have an unwavering spirit.",
        "You're a beacon of light.",
        "You're incredibly selfless.",
        "You have an uplifting presence.",
        "You're wonderfully compassionate.",
        "You're a shining star.",
        "You're filled with grace.",
        "You have a heart of compassion.",
        "You're so genuine.",
        "You're a true ray of hope.",
        "You're incredibly brave.",
        "You're so inspiring.",
        "You have a heart of gold.",
        "You're an absolute joy.",
        "You're so incredibly talented.",
        "You're wonderfully creative.",
        "You have a heartwarming smile.",
        "You're a true blessing in my life.",
        "You're always so supportive.",
        "You're filled with positivity.",
        "You're wonderfully resilient.",
        "You have a heartwarming laugh.",
        "You're a true friend.",
        "You're incredibly strong.",
        "You have a heart of gold.",
        "You're wonderfully caring.",
        "You're an incredible human being.",
        "You have a heartwarming presence.",
        "You're always so understanding.",
        "You're a true inspiration.",
        "You're wonderfully kind.",
        "You have a heart of compassion.",
        "You're incredibly generous.",
        "You have a heartwarming spirit.",
        "You're an absolute delight.",
        "You have a heart of gold.",
        "You're a true friend.",
        "You're incredibly thoughtful.",
        "You're wonderfully supportive.",
        "You have a heartwarming aura.",
        "You're a true gem.",
        "You're absolutely fantastic!"
      ];

      const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

      const complimentEmbed = new EmbedBuilder()
        .setColor('#00FFFF')
        .setTitle('Random Compliment')
        .setDescription(randomCompliment);

      await interaction.reply({ embeds: [complimentEmbed] });
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: 'An error occurred while processing the command.', ephemeral: true });
    }
  },
};
