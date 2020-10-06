// ==UserScript==
// @name        New script - getpocket.com
// @namespace   Violentmonkey Scripts
// @match       https://app.getpocket.com/*
// @grant       none
// @version     1.0
// @author      AdrianSkar
// @description 10/6/2020, 4:45:17 PM
// ==/UserScript==

(function () {
	setTimeout(() => {// Pocket loads content (including buttons) asynchronously
		let listen = document.querySelector("button[aria-label='Bulk Edit']");

		function buttons() {

			setTimeout(() => {// Pocket loads content (including buttons) asynchronously
				let selectVis = function () {
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
						// check if targets are selectable articles
						if ((target[i].getAttribute('xlink:href').indexOf("CheckOpen") > -1)) {
							//click on them
							eventFire(target[i], 'click');
						}
						else {
							// console.log(target[i], 'is not clickable'); 
						}
					}

				};
				console.log(' close bulk');
				//prepend buttons before the close bulk edit one
				let bulk = document.querySelector("button[aria-label='Close Bulk Edit']");
				console.log(bulk);
				let selVis = bulk.cloneNode();
				let selAll = bulk.cloneNode();

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
							selAll.textContent = 'Done';
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
			}, 100);
		}
		if (Boolean(listen)) {
			console.log('listen');
			listen.addEventListener('click', buttons);
		}
		else {
			console.log('no listen');
		}
	}, 2000);
})();
