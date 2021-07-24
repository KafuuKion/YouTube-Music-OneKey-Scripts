// Remember to scroll down all the way to the end so that all entries in the current playlist are loaded!
// Paste the following into the console and press Enter/Return(⏎) to execute the code.
// Depending on your hardware, the browser or the page may lose response for a few seconds or even minutes.
// Stay patient before you can see the script takes effect.

// This currently works only in Japanese language. Replace "露骨な表現" with localized text in other languages.
// You may contribute to this part by adding entries according to the ISO 639-1:2002 Language Codes, followed by two letter country codes where relevant.
// 
const ja = "露骨な表現"
// const en_US = ...
// const ru = ...
// const zh_CN = ...

// CHANGE THE FOLLOWING LINE TO YOUR CURRENT YouTube Music LANGUAGE.
// Find your line above.
var loc = "ja"

var items = document.querySelectorAll("yt-icon");
for (var i = 0; i < items.length; i++) {
    if (items[i].getAttribute("title") === loc) {
        var temp = items[i].parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".like");
        for (var j = 0; j < 1; j++) {
            if (temp[j].getAttribute("aria-pressed") === "true") {
                temp[j].click();
                console.log('Unliked an entry');
            }
        }
    }
}
