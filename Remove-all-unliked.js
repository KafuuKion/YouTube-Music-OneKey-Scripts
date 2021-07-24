// Remember to scroll down all the way to the end so that all entries in the current playlist are loaded!
// Paste the following into the console and press Enter/Return(⏎) to execute the code.
// Depending on your hardware, the browser or the page may lose response for a few seconds or even minutes.
// Stay patient before you can see the script takes effect.

// This one doesn't work yet.
// The dropdown menu just refuses to appear.
// Credit: https://www.reddit.com/r/YoutubeMusic/comments/hko80z/how_to_clean_your_youtube_music_library_songs/


var items = document.querySelectorAll(".like");
for (var j = 0; j < items.length; j++) {
    if (items[j].getAttribute("aria-pressed") === "false") {
        var song = items[j].parentNode.parentNode.parentNode.querySelectorAll(".dropdown-trigger"); 
        for(var i = 0; i < song.length ; i++) {
            console.log('found')
            song[i].scrollIntoView(); 
            song[i].click();
            setTimeout(alert(),1000);
            var dropdown = document.body.querySelector("ytmusic-menu-popup-renderer.scroller");
            var remove = dropdown.querySelectorAll("yt-formatted-string");
            for(var k = 0; k < remove.length ; k++) {
                if(remove.innerHTML == 'プレイリストから削除') {
                    remove.click();
                    console.log("removed from library");
                }
            }
        }
    }
}
