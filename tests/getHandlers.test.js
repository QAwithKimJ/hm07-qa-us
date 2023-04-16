// eslint-disable-next-line no-undef
const config = require('../config');

test('status code should be 200 OK', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
		actualStatus = response.status;
		console.log(response)
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});

test('response body should contain name of kit', async () => {
	let returnedResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
		returnedResponseBody = await response.json(); 
		console.log(response)
	} catch (error) {
		console.error(error);
	}
	expect(returnedResponseBody.name).toBe("Tastes of Paris");
});




