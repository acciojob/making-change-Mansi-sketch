const makeChange = (c) => {
  // your name here
	let obj = {
		"q": 0.25,
		"d": 0.10,
		"n": 0.05,
		"p": 0.01
	}
	let change = {
		"q": 0,
		"d": 0,
		"n": 0,
		"p": 0
	};
	let amount = c/100;
	
	change.q = Math.floor(amount/obj.q);
	amount %= obj.q;

	change.d = Math.floor(amount/obj.d);
	amount %= obj.d;

	change.n = Math.floor(amount/obj.n);
	amount %= obj.n;

	change.p = Math.floor(amount/obj.p);
	amount %= obj.p;
	return change;
};


// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
