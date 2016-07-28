// ==UserScript==
// @name         ncore-login-gyorsitas
// @namespace    peetftp.ddns.net
// @version      0.1
// @description  beléptetés gyorsítása, semmi extra
// @author       kyle
// @match        https://ncore.cc/login.php
// @grant        none
// @require      http://code.jquery.com/jquery-1.11.3.js
// @updateURL    https://raw.githubusercontent.com/peetertoth/ncore-login-gyorsitas/master/ncore-login-gyorsitas.user.js
// @downloadURL  https://raw.githubusercontent.com/peetertoth/ncore-login-gyorsitas/master/ncore-login-gyorsitas.user.js
// ==/UserScript==

$(document).ready(function() {
    var btn = $('input.submit_btn').attr('value', 'Lelépés');
    var clk = function(){
        btn.click();
    };
    var chk = function(){
        console.log("check");
        if (document.login.nev.value.length === 0 || document.login.pass.value.length === 0) {
            return false;
        } else {
            return true;
        }
    };
    var pageCompleted = false;
    var cnt = 0;
    var check = function() {
        cnt++;
        btn.focus();
        pageCompleted = chk();
        if (pageCompleted) {
            console.log("SAJT");
            document.login.submit.click();
            clearInterval(inter);
        }
    };
    var inter = setInterval(check, 300);
});