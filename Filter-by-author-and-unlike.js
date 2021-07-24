// Remember to scroll down all the way to the end so that all entries in the current playlist are loaded!
// Paste the following into the console and press Enter/Return(⏎) to execute the code.
// Depending on your hardware, the browser or the page may lose response for a few seconds or even minutes.
// Stay patient before you can see the script takes effect.

var author_name = "REPLACE THIS WITH YOUR AUTHOR, keep the quote marks";
var items = document.querySelectorAll(".ytmusic-responsive-list-item-renderer");
for (var i = 0; i < items.length; i++) {
    if (items[i].getAttribute("title") === author_name) {
        var temp = items[i].parentNode.parentNode.parentNode.querySelectorAll(".like");
        for (var j = 0; j < temp.length; j++) {
            if (temp[j].getAttribute("aria-pressed") === "true") {
                temp[j].click();
                console.log('Unliked an entry');
            }
        }
    }
}
