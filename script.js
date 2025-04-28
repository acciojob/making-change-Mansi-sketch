const makeChange = (c) => {
  // your name here
	let obj = {
		["q": 0.25],
		["d": 0.10],
		["n": 0.05],
		["p", 0.01]
	}
	let change = [];
		for (let i = 0; i <= 4; i++) {
			let quotients = Math.floor(c / obj[i][1]);
			if (quotients >= 0) {
				change.push(obj[i][0]);
			}
		}
	return change;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
