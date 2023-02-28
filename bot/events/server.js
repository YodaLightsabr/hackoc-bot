import { onReady } from "@conflict/beta/events";
import { stump } from '@conflict/beta/logger';
import express from 'express';
import DiscordOauth2 from 'discord-oauth2';
import dotenv from 'dotenv';

dotenv.config({ path: process.cwd() + '/.env' });

const oauth = new DiscordOauth2();

const app = express();
let started = false;
const port = process.env.PORT ?? 3008;

onReady(client => {
    if (started) return;
    started = true;

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    
    app.get('/onboarding', (req, res) => {
        const state = Buffer.from(JSON.stringify({
            fullName: req.query.name
        }), 'utf8').toString('base64');
        res.redirect('https://discord.com/api/oauth2/authorize?client_id=1022269868478828645&redirect_uri=https%3A%2F%2Fdiscord.api.hackoc.org%2Fonboarding%2Fcallback&response_type=code&scope=identify%20guilds.join&state=' + encodeURIComponent(state));
    });
    
    app.get('/onboarding/callback', async (req, res) => {
        const hack_oc_server_id = '1018262009923502161';

        if (!req.query.code || !req.query.state) return res.status(400).send('Bad Request');

        const state = JSON.parse(Buffer.from(req.query.state, 'base64').toString('utf8'));
    
        const { access_token } = await oauth.tokenRequest({
            clientId: "1022269868478828645",
            clientSecret: process.env.CLIENT_SECRET,
        
            code: req.query.code,
            scope: "identify guilds.join",
            grantType: "authorization_code",
        
            redirectUri: "https://discord.api.hackoc.org/onboarding/callback",
        });
    
        const user = await oauth.getUser(access_token);
    
        const member = await oauth.addMember({
            accessToken: access_token,
            botToken: client.token,
            guildId: hack_oc_server_id,
            userId: user.id,
            ...(state.fullName ? { nick: state.fullName } : {})
        });

        const data = Buffer.from(JSON.stringify({
            fullName: state.fullName,
            discordId: user.id,
            discordTag: user.username + '#' + user.discriminator
        }), 'utf8').toString('base64');

        res.redirect('https://hackoc.org/registration/discord-success?success=true&data=' + encodeURIComponent(data))
    });

    app.listen(port, () => {
        stump.info(`Listening on http://localhost:${port}`);
    });
})
