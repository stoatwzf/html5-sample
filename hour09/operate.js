onmessage = function (e){
	var num = e.data,
		result = 0;

	for (var i = 0; i <= num; i += 1){
		result += 1;
	}
	postMessage(result);
}