import fetchShukujitsu from './shukujitsu';

describe('shukujitsu', () => {
    it('fetchShukujitsu', async () => {
        const result = await fetchShukujitsu();
        console.log(result);
    });
});
