// Remember to scroll down all the way to the end so that all entries in the current playlist are loaded!
// Paste the following into the console and press Enter/Return(⏎) to execute the code.
// Depending on your hardware, the browser or the page may lose response for a few seconds or even minutes.
// Stay patient before you can see the script takes effect.

// This one doesn't work yet.
// Credit: https://www.reddit.com/r/YoutubeMusic/comments/hko80z/how_to_clean_your_youtube_music_library_songs/


var items = document.querySelectorAll(".like");
for (var j = 0; j < items.length; j++) {
    if (items[i].getAttribute("aria-pressed") === "false") {
        var song = items[i].parentNode.parentNode.querySelectorAll(".dropdown-trigger.ytmusic-menu-renderer");
        for(var i = 0; i < song.length; i++) {
            song[i].click(); 
            var dropdown = document.body.querySelector("ytmusic-menu-popup-renderer[slot='dropdown-content']");
            if(dropdown != undefined) {
                var remove = dropdown.querySelector("paper-listbox#items").querySelector("ytmusic-toggle-menu-service-item-renderer.ytmusic-menu-popup-renderer");
                if(remove != null) {
                    actualRemove = remove.querySelector('yt-formatted-string.ytmusic-toggle-menu-service-item-renderer');
                    if(actualRemove != null) {
                        if(actualRemove.innerHTML == 'プレイリストから削除') {
                            remove.click();
                            await new Promise(r => setTimeout(r, 1000));
                            console.log("プレイリストから削除");
                        }
                    }
                }
            }
        }
        await new Promise(r => setTimeout(r, 1000));
    }
}

