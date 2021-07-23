# YouTube-Music-Scripts
Some JavaScript console scripts to one-key tedious operations. Includes: Like all music in current playlist; Unlike all music from a specific author; Filter by music length and unlike.
I know what I write is stinky code, but here's something that might help someone who has just hopped from other streaming services to YouTube Music and is struggling with its lack of multiselect support.
These scripts are only tested on Safari 14.1.1, and on a single playlist that contains about 1,500 entries.

Before use, please replace the `click()` lines with `console.log("Something to indicate an operation")` to test the script. 

**Please do test the script before use!**
**It will really hurt if any unintended operations are done to your precious, irreplaceable playlist!**

Any modifications to these scripts are welcomed.

## Usage
0. Open the playlist you want to modify.
0. Scroll down all the way to the end so that all entries in the current playlist are loaded!
0. Paste the script into the browser console and press Enter/Return(⏎) to execute the code.
0. Depending on your hardware, the browser or the page may lose response for a few seconds or even minutes.
0. Stay patient before you can see the script takes effect.
* Liking or unliking can be switched by flipping the `false` (or `true`) in `if (items[i].getAttribute("aria-pressed") === "false") {` line into the opposite one.

## Like-all-in-playlist.js
This script just likes everything in the current playlist.
It does a check if an entry is already liked to prevent unintended unliking.

## Filter-by-author-and-unlike.js
This script matches the author name, and unlikes the entry if it is liked.
It requires an exact match.

## Unlike-longer-than-10min.js
This script unlikes all entries that is longer than 10 minutes (>= 10:00).
It filters by the string length (length == 4 for 0:00 to 9:59) instead of the actual chronological length (because it meets my current demands).
If you could make it filter by exact time, please do submit the modified code. Thank you for your kindness and sorry for my laziness.
