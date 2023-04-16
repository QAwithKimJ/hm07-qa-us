// eslint-disable-next-line no-undef
const config = require('../config');

test('status code should be 200 OK', async () => {
	let actualStatus; 
		try {
			const response = await fetch(`${config.API_URL}/api/v1/products/2`,
			 {
				method: 'PUT',
				headers: {
				'Content-Type': 'application/json'
				},
				body: JSON.stringify(requestBody)
			})
		actualStatus = response.status;
		console.log(response)
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});

const requestBody = {
    "price": 150
}
test('response body should show updated grocery price change for product id 2', async () => {
	let returnedResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/2`, 
		{
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json' 
			},
			body: JSON.stringify(requestBody)
		});
	    returnedResponseBody = await response.json()
        console.log(response);
	} catch (error) {
		console.error(error);
	}
	expect(returnedResponseBody.ok).toBe(true);
});

