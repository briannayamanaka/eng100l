/*jslint browser: true*/
/*global $, jQuery*/



$(document).ready(function () {

    "use strict";
    var scanned = false,
        scannedInput = [];

    $(window).keypress(function (scanEvent) {

        // check to make sure input is a number 0 - 9 in ASCII
        if (scanEvent.which >= 48 && scanEvent.which <= 57) {

            // push number to array
            scannedInput.push(String.fromCharCode(scanEvent.which));
        }

        setTimeout(function () {

            // if length is equivalent to proper length, add the string to userID variable
            if (scannedInput.length === 10) {

                // store array into string
                var userID = scannedInput.join("");
                scanned = true;
                $("#userId").val(userID);
                console.log("user: " + userID);


                if (scanned) {
                    console.log("scanned");
                    //save RFID input
                    window.localStorage.setItem('userID', userID);

                    //jump to exhibit_terminal page
                    window.location.href = "../html/exhibit_terminal.html";
                }
            }

            // clear array
            scannedInput = [];

        }, 500);
    });
});
