
let selectVis = function () {

	function eventFire(el) {
		let evt = new MouseEvent("click", {
			view: window,
			bubbles: true,
			cancelable: true,
		});
		el.dispatchEvent(evt);
	}

	//svg
	let target = document.getElementsByTagName("use");

	//loop trough <use> elements (some are not articles)
	for (let i = 0; i < target.length; i++) {
		// check if targets are selectable articles
		if ((target[i].getAttribute('xlink:href').indexOf("CheckOpen") > -1)) {
			//click on them
			eventFire(target[i]);
		}
		else {
			// console.log(target[i], 'is not clickable');
		}
	}

};

//prepend buttons before the close bulk edit one
let bulk = document.querySelector("button[aria-label='Close Bulk Edit']"),
	selVis = bulk.cloneNode(),
	selAll = bulk.cloneNode();

selVis.textContent = 'Select visible';
selAll.textContent = 'Select all';
selVis.setAttribute('margin-right', '1em'); // todo: fix; not working
selAll.setAttribute('margin-right', '1em');

bulk.parentElement.prepend(selVis);
bulk.parentElement.prepend(selAll);

// select all articles (selectVis + scroll every 2secs)
let selectAll = function () {
	let target = document.getElementsByTagName("use"),
		last = target[target.length - 1];

	function scrollEnd() {
		if (last.getAttribute('xlink:href').indexOf("CheckOpen") === -1) {
			selAll.textContent = 'Selected';
			console.log('done');
			clearInterval(timer);
			selectVis();
		}
		else {
			selectVis();
			last.scrollIntoView();
			selAll.textContent = 'working...';
			console.log('scrolling');
		}
	}
	let timer = setInterval(() => {
		target = document.getElementsByTagName("use");
		last = target[target.length - 1];
		scrollEnd();
	}, 2000);
};

selVis.addEventListener('click', selectVis);
selAll.addEventListener('click', selectAll);

