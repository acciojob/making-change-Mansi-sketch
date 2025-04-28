const makeChange = (c) => {
  // your name here
	let obj = {
		"q": 25,
		"d": 10,
		"n": 05,
		"p": 01
	}
	let change = {
		"q": 0,
		"d": 0,
		"n": 0,
		"p": 0
	};

	
	change.q = Math.floor(c/obj.q);
	c %= obj.q;

	change.d = Math.floor(c/obj.d);
	c %= obj.d;

	change.n = Math.floor(c/obj.n);
	c %= obj.n;

	change.p = c;
	
	return change;
};


// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
