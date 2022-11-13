import { onReady } from "@conflict/beta/events";
import { stump } from '@conflict/beta/logger';

onReady(client => {
    client.channels.cache.get('1041173665770909747').send('Ready');
    stump.info("Ready")
})