onmessage = function (e){
	var intArray = JSON.parse(e.data),
		returnStr = '';

	for (var i = 0; i < intArray.length; i += 1){
		if (parseInt(intArray[i]) % 3 === 0){
			if (returnStr !== ''){
				returnStr += ';'
			}
			returnStr += intArray[i];
		}
	}
	postMessage(returnStr);
	close();
}