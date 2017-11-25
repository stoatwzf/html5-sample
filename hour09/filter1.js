onmessage = function (e){
	var intArray = new Array(200);

	for (var i = 0; i < 200; i += 1){
		intArray[i] = parseInt(Math.random() * 200);
	}

	var worker = new Worker('filter2.js');

	worker.postMessage(JSON.stringify(intArray));
	worker.onmessage = function (e){
		postMessage(e.data);
	}
}