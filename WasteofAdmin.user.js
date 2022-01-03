// ==UserScript==
// @name         WasteOfAdmin
// @namespace    retronbv
// @version      3.0
// @description  Shows an admin badge if the user you are viewing has "(admin)" in their bio.
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
  <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
</svg>`
        try {

            if (document.querySelector("form>input").value.search("(admin)") != -1) {
                document.querySelector("form>input").value=document.querySelector("form>input").value.replace("(admin)","");
                var badge = document.createElement("span");
                badge.innerHTML=svg;
                badge.className="inline-block text-primary-500 dark:text-primary-300";
                document.querySelector("h1").appendChild(badge)
            }
        } catch {
            if (document.querySelector("div.inline-block.ml-4.h-full > div > span").innerText.search("(admin)") != -1) {
                document.querySelector("div.inline-block.ml-4.h-full > div > span").innerText=document.querySelector("div.inline-block.ml-4.h-full > div > span").innerText.replace("(admin)","");
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
