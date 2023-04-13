// eslint-disable-next-line no-undef
const config = require('../config');

test('delete kit 1 and return 200 status code', async () => {
	let deleteStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
			method: 'DELETE',
		});
		deleteStatus = response.status;
		
	} catch (error) {
		console.error(error);
	}
	expect(deleteStatus).toBe(200);
});


test('parse the response'), async () => {
	const data = await response.json();
	for (i = 0; i < data.length; i++)
        console.log(data);
}
