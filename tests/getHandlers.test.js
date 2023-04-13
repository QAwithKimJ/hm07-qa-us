// eslint-disable-next-line no-undef
const config = require('../config');

test('status should be 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualStatus = response.status;
		console.log(response)
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(400);
});

test('response body contains expected data', async () => {
	const result = []
	const data = await response.json();
	for (let i = 0; i < data.length; i++) {
		const startWorkingHours = data[i]["workingHours"]["start"];
        const endWorkingHours = data[i]["workingHours"]["end"];
        result.push(startWorkingHours < endWorkingHours)
    }
    expect(result).not.toContain(false)
	}
)

)



