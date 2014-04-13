chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		
		var elements = document.querySelectorAll('.social-count');
		var elementIdx;
		var el;
		
		for (elementIdx = 0; elementIdx < elements.length; elementIdx++) {
			el = elements[elementIdx];
			el.style.display = 'none';
		}	
	}
	}, 1);
});