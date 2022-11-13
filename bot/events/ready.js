import { onReady } from "@conflict/beta/events";

onReady(client => {
    client.channels.cache.get('1041173665770909747').send('Ready');
})