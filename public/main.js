console.log("Cookies", document.cookie);
console.time("fetch");
fetch("https://mam-api-test.vercel.app/api/random")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
		console.timeEnd("fetch");
	})
	.catch((error) => {
		console.log(error);
	});
