const { ActivityType, Status } = require("discord.js");
const mongodbURL = process.env.MONGODBURL;
const mongoose = require ('mongoose')

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Ready!');

        if (!mongodbURL) return;

        await mongoose.connect(mongodbURL || '', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        if (mongoose.connect) {
            console.log("The database is running!")
        }

        async function pickPresence () {
            const option = Math.floor(Math.random() * statusArray.length);

            try {
                await client.user.setPresence({
                    activities: [
                        {
                            name: statusArray[option].content,
                            type: statusArray[option].type,

                        },
                    
                    ],

                    status: statusArray[option].status
                })
            } catch (error) {
                console.error(error);
            }
        }
    },
};
