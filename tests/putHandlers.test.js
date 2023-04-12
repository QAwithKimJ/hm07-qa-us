// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"price": 175
}

test('update price of product in kit 7 and status should be 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const data = await response.json();
        console.log(data);
	} catch (error) {
		console.error(error);
	}
});

