const uniqueArray = require('./index')

const arr = [
	{ Value: 'Js', ID: 1, Direction: 'Front-End' },
	{ Value: 'Java', ID: 62, Direction: 'Back-End' },
	{ Value: 'HTML', ID: 2, Direction: 'Front-End' },
	{ Value: 'CSS', ID: 3, Direction: 'Front-End' },
	{ Value: 'COTLIN', ID: 72, Direction: 'MOBILE' },
	{ Value: 'PYTHON', ID: 4, Direction: 'Back-End' },
	{ Value: 'JAVA', ID: 63, Direction: 'Back-End' },
	{ Value: 'C#', ID: 5, Direction: 'Back-End' },
	{ Value: 'HTML', ID: 22, Direction: 'Front-End' },
	{ Value: 'CsS', ID: 32, Direction: 'Front-End' },
	{ Value: 'JAVa', ID: 6, Direction: 'Back-End' },
	{ Value: 'c#', ID: 52, Direction: 'Back-End' },
	{ Value: 'COTliN', ID: 7, Direction: 'MOBILE' },
	{ Value: 'JS', ID: 12, Direction: 'Back-End' },
]

const uniqueArr = [
	{ Value: 'Js', ID: 1, Direction: 'Front-End' },
	{ Value: 'Java', ID: 62, Direction: 'Back-End' },
	{ Value: 'HTML', ID: 2, Direction: 'Front-End' },
	{ Value: 'CSS', ID: 3, Direction: 'Front-End' },
	{ Value: 'COTLIN', ID: 72, Direction: 'MOBILE' },
	{ Value: 'PYTHON', ID: 4, Direction: 'Back-End' },
	{ Value: 'C#', ID: 5, Direction: 'Back-End' },
]

describe('uniqueArray function', () => {
	it('Array is unique', () => {
		expect(uniqueArray(arr)).toEqual(uniqueArr)
	})
})
