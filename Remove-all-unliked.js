// Remember to scroll down all the way to the end so that all entries in the current playlist are loaded!
// Paste the following into the console and press Enter/Return(⏎) to execute the code.
// Depending on your hardware, the browser or the page may lose response for a few seconds or even minutes.
// Stay patient before you can see the script takes effect.

// This one doesn't work yet.

var items = document.querySelectorAll(".like");
for (var i = 0; i < items.length; i++) {
    if (items[i].getAttribute("aria-pressed") === "false") {
        var temp = items[i].parentNode.parentNode.querySelectorAll(".dropdown-trigger");
        temp[0].click();
        var menu = temp[j].querySelectorAll(".ytmusic-menu-service-item-renderer");
        menu[2].click();
        console.log('Removed one from playlist.');
    }
}
