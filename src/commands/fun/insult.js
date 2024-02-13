const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const insults = [
    "You're as useless as the 'g' in lasagna.",
    "I'd agree with you but then we'd both be wrong.",
    "If laughter is the best medicine, your face must be curing the world.",
    "You're so ugly, when your mom dropped you off at school she got a fine for littering.",
    "I'm jealous of people that don't know you!",
    "Your birth certificate is an apology letter from the condom factory.",
    "I'd slap you, but that would be animal abuse.",
    "You're so ugly, you scared the crap out of the toilet.",
    "If brains were dynamite, you wouldn't have enough to blow your nose.",
    "I thought of you today. It reminded me to take out the trash.",
    "You're not stupid; you just have bad luck thinking.",
    "I'm not saying I hate you, but I would unplug your life support to charge my phone.",
    "I'd tell you to go to hell, but I never want to see you again.",
    "If you were any more inbred, you'd be a sandwich.",
    "You're like Monday mornings: nobody likes you.",
    "I'd call you a donkey, but that would be an insult to donkeys.",
    "You're as bright as a black hole - and just as dense.",
    "If your brain was dynamite, there wouldn't be enough to blow your hat off.",
    "I'd challenge you to a battle of wits, but I see you're unarmed.",
    "You're so dense, light bends around you.",
    "You're not the dumbest person in the world, but you better hope they don't die.",
    "I'm not saying you're dumb, but you have your own gravitational pull.",
    "I'd insult you more, but I can't improve on perfection.",
    "If ignorance is bliss, you must be the happiest person alive.",
    "You're impossible to underestimate.",
    "I would say you're dumb as a rock, but at least a rock serves a purpose.",
    "Your face makes onions cry.",
    "You're so dumb, you tried to climb Mountain Dew.",
    "You're so boring, you can't even entertain a doubt.",
    "I would challenge you to a battle of wits, but I see you're unarmed.",
    "You're not pretty enough to be this dumb.",
    "You're not just a clown; you're the entire circus.",
    "You're not just wrong; you're impressively wrong.",
    "You're so dull, you make beige look colourful.",
    "You're not the worst person in the world, but you better hope they don't die.",
    "You're as sharp as a bowling ball.",
    "You're about as useful as a screen door on a submarine.",
    "If brains were dynamite, you wouldn't have enough to blow your nose.",
    "I don't insult people; I just describe them.",
    "You're the human version of period cramps.",
    "I refuse to engage in a battle of wits with an unarmed person.",
    "You're as welcome as a fart in a spacesuit.",
    "You're about as useful as a chocolate teapot.",
    "You're like a slinky: not really good for anything, but you still bring a smile to my face when I push you down the stairs.",
    "You're the reason the gene pool needs a lifeguard.",
    "You're about as bright as a black hole, and just as attractive.",
    "You're not stupid; you just have bad luck thinking.",
    "You're not the worst person in the world, but you better hope they don't die.",
    "You're not just a clown; you're the entire circus.",
    "You're impossible to underestimate.",
    "You're not the dumbest person in the world, but you better hope they don't die.",
    "I'm jealous of people that don't know you!",
    "You're not just wrong; you're impressively wrong.",
    "You're not pretty enough to be this dumb.",
    "You're so boring, you can't even entertain a doubt.",
    "You're so dense, light bends around you.",
    "You're about as useful as a screen door on a submarine.",
    "You're about as bright as a black hole, and just as attractive.",
    "You're not just a clown; you're the entire circus.",
    "You're not stupid; you just have bad luck thinking.",
    "You're not the dumbest person in the world, but you better hope they don't die.",
    "You're impossible to underestimate.",
    "You're not just wrong; you're impressively wrong.",
    "You're not pretty enough to be this dumb.",
    "You're so boring, you can't even entertain a doubt.",
    "You're so dense, light bends around you.",
    "You're about as useful as a screen door on a submarine.",
    "You're about as bright as a black hole, and just as attractive.",
    "You're not just a clown; you're the entire circus.",
    "You're not stupid; you just have bad luck thinking.",
    "You're not the dumbest person in the world, but you better hope they don't die.",
    "You're impossible to underestimate.",
    "You're not just wrong; you're impressively wrong.",
    "You're not pretty enough to be this dumb.",
    "You're so boring, you can't even entertain a doubt.",
    "You're so dense, light bends around you.",
    "You're about as useful as a screen door on a submarine.",
    "You're about as bright as a black hole, and just as attractive.",
    "You're not just a clown; you're the entire circus.",
    "You're not stupid; you just have bad luck thinking.",
    "You're not the dumbest person in the world, but you better hope they don't die.",
    "You're impossible to underestimate.",
    "You're not just wrong; you're impressively wrong.",
    "You're not pretty enough to be this dumb.",
    "You're so boring, you can't even entertain a doubt.",
    "You're so dense, light bends around you.",
    "You're about as useful as a screen door on a submarine.",
    "You're about as bright as a black hole, and just as attractive.",
  ];
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName('insult')
      .setDescription('Receive a random insult'),
  
    async execute(interaction) {
      try {
        const randomInsult = insults[Math.floor(Math.random() * insults.length)];
  
        const insultEmbed = new EmbedBuilder()
          .setColor('#00FFFF')
          .setTitle('Random Insult')
          .setDescription(randomInsult);
  
        await interaction.reply({ embeds: [insultEmbed] });
      } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'An error occurred while processing the command.', ephemeral: true });
      }
    },
  };
  