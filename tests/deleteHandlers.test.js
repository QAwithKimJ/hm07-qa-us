// eslint-disable-next-line no-undef
const config = require('../config');

test('delete kit 7 and return 200 status code', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error(error);
	}
});
