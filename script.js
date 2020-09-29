// https://stackoverflow.com/questions/2705583/how-to-simulate-a-click-with-javascript
function eventFire(el, etype) {
	if (el.fireEvent) {
		el.fireEvent('on' + etype);
	} else {
		let evObj = document.createEvent('Events');
		evObj.initEvent(etype, true, false);
		el.dispatchEvent(evObj);
	}
}

//svg
let target = document.getElementsByTagName("use");

//loop trough <use> elements (some are not articles)
for (let i = 0; i < target.length; i++) {
	// check if target are selectable articles
	if ((target[i].getAttribute('xlink:href').indexOf("CheckOpen") > -1)) {
		//click on them
		eventFire(target[i], 'click');
	}
	else { console.log(target[i], 'is not clickable'); }
	// eventFire(cells, 'click');
}
