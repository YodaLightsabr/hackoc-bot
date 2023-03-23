import { onGuildMemberAdd } from '@conflict/beta/events';
import finish from '../views/finish.js';
import mongo from 'mongodb';

export function dbConnect () {
    return new Promise((resolve, reject) => {
    const { MongoClient, ServerApiVersion } = mongo;
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    if (err) return reject(err);
  resolve(client);
  // perform actions on the collection object
});
    });

}


onGuildMemberAdd(async member => {

    const db = await dbConnect();


    console.log('new member', member);
    const name = 'welcome-' + member.displayName.toLowerCase().split(' ').join('-').split('').filter(a => `-abcdefghijklmnopqrstuvwxyz1234567890`.includes(a)).join('');
    console.log(name);
    const channel = await member.guild.channels.create(name, {
        reason: 'Create a welcome channel',
        // old parents:
        // 1022358272377880640 - Home~1
        parent: '1088251238824550542'
    });
    const collection = db.db("primary").collection("channels");
    console.log(await collection.insertOne({
        userID: member.id,
        channelID: channel.id
    }));

    console.log(channel);

    await channel.permissionOverwrites.create(member, {
        "VIEW_CHANNEL": true
    });

    channel.view(finish({ userID: member.id }));

    // await channel.send(`:wave: Hello, <@${member.id}>! Welcome to Hack OC!`);
});
