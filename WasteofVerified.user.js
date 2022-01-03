// ==UserScript==
// @name         WasteofVerified
// @namespace    retronbv
// @version      3.0
// @description  Shows an verified badge if the user you are viewing has "verified" in their bio.
// @author       retronbv
// @match        https://wasteof.money/*
// @icon         https://www.google.com/s2/favicons?domain=wasteof.money
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function addAddon() {
    window.WasteOfAddons.push( function() {
        var svg = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
</svg>`
        try {

            if (document.querySelector("form>input").value.search("verified") != -1) {
                document.querySelector("form>input").value=document.querySelector("form>input").value.replace("verified","");
                var badge = document.createElement("span");
                badge.innerHTML=svg;
                badge.className="inline-block text-primary-500 dark:text-primary-300";
                document.querySelector("h1").appendChild(badge)
            }
        } catch {
            if (document.querySelector("div.inline-block.ml-4.h-full > div > span").innerText.search("verified") != -1) {
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