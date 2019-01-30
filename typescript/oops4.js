"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var fs = require('fs');
var jsonfile = require('jsonfile');
var read = require('readline-sync');
var oops1_1 = require("./oops1");
var InventoryManage = /** @class */ (function (_super) {
    __extends(InventoryManage, _super);
    function InventoryManage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InventoryManage.prototype.input = function () {
        var value = read.question("");
        return value;
    };
    InventoryManage.prototype.readjson_grocery = function () {
        var data = fs.readFileSync('./inventory.json');
        var content = JSON.parse(data);
        return content;
    };
    InventoryManage.prototype.purchase = function () {
        console.log("Available items in our grocery store:\n");
        console.log("what you want to add ?");
        console.log("\n1.Rice     2.Pulses     3.Wheats\n");
        console.log("Enter Your choice>>>");
        var choice = im.input();
        console.log("Your choice is " + choice);
        if (choice == 1) {
            var data = this.readjson_grocery();
            var name = read.question("Enter Name:");
            var price = read.question("Enter price:");
            var available = read.question("Enter availability:");
            var object = { "name": name,
                "price": price,
                "available": available };
            data.rice.push(object);
            jsonfile.writeFileSync('./inventory.json', data, { flag: 'w' });
            // console.log("Rice details");
            // I.rice_details();
        }
        else if (choice == 2) {
            var data = this.readjson_grocery();
            var name = read.question("Enter Name:");
            var price = read.question("Enter price:");
            var available = read.question("Enter availability:");
            var object = { "name": name,
                "price": price,
                "available": available };
            data.pulses.push(object);
            jsonfile.writeFileSync('./inventory.json', data, { flag: 'w' });
            // console.log("Pulses details")
            // I.pulse_details();
        }
        else if (choice == 3) {
            var data = this.readjson_grocery();
            var name = read.question("Enter Name:");
            var price = read.question("Enter price:");
            var available = read.question("Enter availability:");
            var object = { "name": name,
                "price": price,
                "available": available };
            data.wheats.push(object);
            jsonfile.writeFileSync('./inventory.json', data, { flag: 'w' });
            // console.log("Wheats details")
            // I.wheat_details();
        }
        else {
            console.log("Invalid Choice...");
        }
    };
    return InventoryManage;
}(oops1_1.Inventory));
var i = new oops1_1.Inventory();
var im = new InventoryManage();
//obj.show_avaibility();
im.purchase();
