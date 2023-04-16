// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "products": [
        {
            "id": 1,
            "quantity": 3
        },
        {
            "id": 4,
            "quantity": 1
        },
        {
            "id": 9,
            "quantity": 3
        }
    ],
    "deliveryTime": 7
}

test('status code should be 200 OK', async () => {
	let actualStatus; 
		try {
			const response = await fetch(`${config.API_URL}/order-and-go/v1/delivery`,
			 {
				method: 'POST',
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


test('response body should contain order and go delivery courier', async () => {
	let returnedResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/order-and-go/v1/delivery`,
		 {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	    returnedResponseBody = await response.json();

	} catch (error) {
		console.error(error);
	}
	expect(returnedResponseBody.name).toBe("Order and Go");
});

