# pocketSelectAll
Add the ability to select all [Pocket](https://app.getpocket.com/) articles. This process can be easily automated using tools like [Integromat](https://www.integromat.com/) but I'll test custom JS scripts for practicing purposes.

I'll implement easier ways to use this but for now you'd need to follow this simple steps:

1. Enable the bulk edit option within Pocket.<br>
		![bulk edit button image](images/bulk_edit.png)
2. Copy the `script.js` code and paste it into your browser's console (F12 or Menu -> Dev tools) and press `Enter`.
   
This will show a couple of buttons allowing you to select all visible articles (Pocket currently only shows around 25 at a time) or all articles within the page. 

![Select visible button screenshot](images/buttons.png)

When using the *Select all* option the script will select all visible articles, scroll down and wait 2 seconds for the new batch to load (showing *working...* within the button) until it finds no more articles to select (showing *done* within the button).

### Notes:
- The *Select all* script has been tested to work properly down to 1mb speeds, if you have a slower connection try raising the interval time at line 63 (`timer` function).
- If you don't want to paste the script every time you visit the page again, you can take advantage of tools like [Violentmonkey](https://violentmonkey.github.io/) and load it from this [file](vm_pocketSelectAll.js) or install it directly from [greasyfork](https://greasyfork.org/en/scripts/412592-pocketselectall).
- Inctructions for [selecting with Integromat](./integromat.md).
  

