// ==UserScript==
// @name         WasteOfAddons Manager
// @namespace    retronbv
// @version      1.0
// @description  Manager for the WasteOfAddons project
// @author       retronbv
// @match        https://wasteof.money/*
// @icon         https://www.google.com/s2/favicons?domain=wasteof.money
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.WasteOfAddons = []
    window.onmousemove = function () {
        for (let i = 0; i < window.WasteOfAddons.length; i++) {
            window.WasteOfAddons[i]()
        }
    }
})();