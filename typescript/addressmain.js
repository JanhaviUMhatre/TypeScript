"use strict";
exports.__esModule = true;
var read = require('readline-sync');
var addressmainoptions_1 = require("./addressmainoptions");
var AddressBook = /** @class */ (function () {
    function AddressBook() {
    }
    AddressBook.prototype.mainaddress = function () {
        var ob = new addressmainoptions_1.Options;
        console.log("**********WELCOME TO ADDRESS BOOK**********");
        var ch = 0;
        do {
            console.log("choose option and enter choice number : ");
            console.log("1.create");
            console.log("2.open");
            console.log("3.quit");
            var ch_1 = parseInt(read.question("enter choice--"));
            //console.log(ch);\
            switch (ch_1) {
                case 1: {
                    ob.create();
                    break;
                }
                case 2: {
                    ob.open();
                    break;
                }
                case 3: {
                    return;
                }
                default: {
                    console.log("Invalid choice");
                    break;
                }
            }
        } while (ch != 4);
    };
    return AddressBook;
}());
var obj = new AddressBook();
obj.mainaddress();
