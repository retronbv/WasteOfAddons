// ==UserScript==
// @name         WasteofBeta
// @namespace    rgantzos
// @version      1.0
// @description  Shows an beta badge if the user you are viewing has "beta" in their bio.
// @author       rgantzos
// @match        https://wasteof.money/*
// @icon         https://www.google.com/s2/favicons?domain=wasteof.money
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function addAddon() {
    window.WasteOfAddons.push( function() {
        var svg = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
	<path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clip-rule="evenodd"></path>
</svg>`
        try {

            if (document.querySelector("form>input").value.search("beta") != -1) {
                document.querySelector("form>input").value=document.querySelector("form>input").value.replace("beta","");
                var badge = document.createElement("span");
                badge.innerHTML=svg;
                badge.className="inline-block text-primary-500 dark:text-primary-300";
                document.querySelector("h1").appendChild(badge)
            }
        } catch {
            if (document.querySelector("div.inline-block.ml-4.h-full > div > span").innerText.search("beta") != -1) {
                document.querySelector("div.inline-block.ml-4.h-full > div > span").innerText=document.querySelector("div.inline-block.ml-4.h-full > div > span").innerText.replace("verified","");
                var badge = document.createElement("span");
                badge.innerHTML=svg;
                badge.className="inline-block text-primary-500 dark:text-primary-300";
                document.querySelector("h1").appendChild(badge)
            }
        }
    })}
    var waitForGlobal = function(key, callback) {
            if (window[key]) {
                callback();
            } else {
                setTimeout(function() {
                    waitForGlobal(key, callback);
                }, 100);
            }
        };
        waitForGlobal("WasteOfAddons", function() {
            addAddon()
        });
})();
