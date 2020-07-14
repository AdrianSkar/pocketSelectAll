// This process can be easily automate using tools like integromat. Testing scripts for practicing purposes

// https://stackoverflow.com/questions/2705583/how-to-simulate-a-click-with-javascript
function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

//svg
var target = document.getElementsByTagName("use");

//loop trough <use> elements (some are not articles)
for (let i = 0; i < target.length; i++) {
	// check if target are selectable articles
	if ((target[i].getAttribute('xlink:href').indexOf("CheckOpen") > -1)) {
		//click on them
		eventFire(target[i], 'click');
	}
	else { console.log(target[i], 'is not clickable')}
	// eventFire(cells, 'click');
}
