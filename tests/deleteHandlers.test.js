// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"name": "my created kit",
	"cardId": 1
}

test('kit should be created then deleted', async () => {
	let actualStatus;
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}


	let actualResponseBody = await response.json();
	let actualId = actualResponseBody.id; 

	let deleteStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/` + actualId, {
			method: 'DELETE',
		});
		deleteStatus = response.status;

	} catch (error) {
		console.error(error);
	}
	expect(deleteStatus).toBe(200); 
});




