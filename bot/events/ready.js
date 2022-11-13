import { onReady } from "@conflict/beta/events";
import { stump } from '@conflict/beta/logger';

onReady(client => {
    stump.info("Ready")
    client.channels.cache.get('1041173665770909747').send('Ready');
})