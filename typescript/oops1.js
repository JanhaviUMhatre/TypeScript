"use strict";
exports.__esModule = true;
var Inventory = /** @class */ (function () {
    function Inventory() {
    }
    Inventory.prototype.jsonread = function () {
        try {
            var json = require('./inventory.json');
            //console.log(JSON.parse(json));
            var myObjStr = JSON.stringify(json);
            //console.log(myObjStr);
            var data = JSON.parse(myObjStr);
            return data;
            //console.log(x['rice'])
        }
        catch (err) {
            console.log("Cannot find module 'inventory.json'");
        }
    };
    Inventory.prototype.rice_details = function () {
        console.log("------------RICE------------");
        var data = this.jsonread();
        //for rice
        for (var _i = 0, _a = data['rice']; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log("Rice name : " + i['name'] + "\nPrice per KG : " + i['price'] + "\nAvaibility : " + i['available']);
            console.log("Total Price is : " + i['price'] * i['available'] + "\n");
        }
    };
    Inventory.prototype.pulse_details = function () {
        //for pulses
        console.log("------------PULSES------------");
        var data = this.jsonread();
        for (var _i = 0, _a = data['pulses']; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log("pulses name : " + i['name'] + "\nPrice per KG : " + i['price'] + "\nAvaibility : " + i['available']);
            console.log("Total Price is : " + i['price'] * i['available'] + "\n");
        }
    };
    Inventory.prototype.wheat_details = function () {
        //for wheats
        console.log("------------WHEATS------------");
        var data = this.jsonread();
        for (var _i = 0, _a = data['wheats']; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log("wheats name : " + i['name'] + "\nPrice per KG : " + i['price'] + "\nAvaibility : " + i['available']);
            console.log("Total Price is : " + i['price'] * i['available'] + "\n");
        }
    };
    Inventory.prototype.main = function () {
        console.log("------------INVENTORY------------");
        this.pulse_details();
        this.rice_details();
        this.wheat_details();
    };
    return Inventory;
}());
exports.Inventory = Inventory;
var obj = new Inventory();
obj.main();
