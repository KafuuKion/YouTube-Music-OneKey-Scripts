// Remember to scroll down all the way to the end so that all entries in the current playlist are loaded!
// Paste the following into the console and press Enter/Return(⏎) to execute the code.
// Depending on your hardware, the browser or the page may lose response for a few seconds or even minutes.
// Stay patient before you can see the script takes effect.

var items = document.querySelectorAll(".MUSIC_RESPONSIVE_LIST_ITEM_COLUMN_DISPLAY_PRIORITY_HIGH");
for (var i = 0; i < items.length; i++) {
    if (items[i].textContent.length > 4) {
        console.log("Found entry with length "+ items[i].textContent.length);
        var temp = items[i].parentNode.parentNode.querySelectorAll(".like");
        for (var j = 0; j < temp.length; j++) {
            if (temp[j].getAttribute("aria-pressed") === "true") {
                temp[j].click();
                console.log('Unliked');
            }
        }
    }
}
