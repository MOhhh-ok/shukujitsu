import { fetchShukujitsu } from './fetchShukujitsu';

describe('fetchShukujitsu', () => {
    it('fetchShukujitsu', async () => {
        const result = await fetchShukujitsu();
        console.log(result);
    });
});
