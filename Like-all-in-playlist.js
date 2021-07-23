// Remember to scroll down all the way to the end so that all entries in the current playlist are loaded!
// Paste the following into the console and press Enter/Return(⏎) to execute the code.
// Depending on your hardware, the browser or the page may lose response for a few seconds or even minutes.
// Stay patient before you can see all the thumbs up appear.

var items = document.querySelectorAll(".like");
for (var i = 0; i < items.length; i++) {
    if (items[i].getAttribute("aria-pressed") === "false") {
        items[i].click();
        console.log('Liked');
    }
}
