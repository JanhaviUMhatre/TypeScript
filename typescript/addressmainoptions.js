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
var read = require('readline-sync');
var fs = require('fs');
var path = require('path');
var jsonfile = require('jsonfile');
var Operations = /** @class */ (function () {
    function Operations() {
    }
    Operations.prototype.add = function () {
        var filename = read.question("confirm file name-->");
        var file = filename;
        var firstname = read.question("firstname-->");
        var lastname = read.question("lastname-->");
        var number = read.question("number-->");
        var city = read.question("city-->");
        var state = read.question("state-->");
        if (number.length != 10)
            throw "Number should be of 10 digits...";
        var obj = { firstname: firstname,
            lastname: lastname,
            number: number,
            city: city,
            state: state };
        jsonfile.writeFileSync(file, obj);
        this.save();
    };
    Operations.prototype.edit = function () {
        console.log("1.firstname  2.lastname  3.number  4.state  5.city  6.exit: ");
        var updatevalue = read.question("");
        switch (updatevalue) {
            case "firstname": {
                var file_name = read.question("confirm file name-->");
                var extensionname = '.json';
                var json = require("./" + file_name + extensionname);
                var o = JSON.stringify(json);
                var p = JSON.parse(o);
                var firstname = read.question("enter new name: ");
                p["firstname"] = firstname;
                console.log(p["firstname"]);
                var ob = JSON.stringify(p);
                var pa = JSON.parse(ob);
                jsonfile.writeFileSync(file_name, pa);
                this.save();
                break;
            }
            case "lastname": {
                var last_name = read.question("confirm file name-->");
                var extensionname = '.json';
                var json = require("./" + last_name + extensionname);
                var o = JSON.stringify(json);
                var p = JSON.parse(o);
                var lastname = read.question("enter new name: ");
                p["lastname"] = lastname;
                console.log(p["lastname"]);
                var ob = JSON.stringify(p);
                var pa = JSON.parse(ob);
                jsonfile.writeFileSync(last_name, pa);
                this.save();
                break;
            }
            case "number": {
                var num = read.question("confirm file name-->");
                var extensionname = '.json';
                var json = require("./" + num + extensionname);
                var o = JSON.stringify(json);
                var p = JSON.parse(o);
                var number = read.question("enter new number: ");
                p["number"] = number;
                console.log(p["number"]);
                var ob = JSON.stringify(p);
                var pa = JSON.parse(ob);
                jsonfile.writeFileSync(num, pa);
                this.save();
                break;
            }
            case "state": {
                var statename = read.question("confirm file name-->");
                var extensionname = '.json';
                var json = require("./" + statename + extensionname);
                var o = JSON.stringify(json);
                var p = JSON.parse(o);
                var state = read.question("enter new state: ");
                p["state"] = state;
                console.log(p["state"]);
                var ob = JSON.stringify(p);
                var pa = JSON.parse(ob);
                jsonfile.writeFileSync(statename, pa);
                this.save();
                break;
            }
            case "city": {
                var cityname = read.question("confirm file name-->");
                var extensionname = '.json';
                var json = require("./" + cityname + extensionname);
                var o = JSON.stringify(json);
                var p = JSON.parse(o);
                var city = read.question("enter new city: ");
                p["city"] = city;
                console.log(p["city"]);
                var ob = JSON.stringify(p);
                var pa = JSON.parse(ob);
                jsonfile.writeFileSync(cityname, pa);
                this.save();
                break;
            }
            case "exit": {
                return;
            }
            default: {
                console.log("Invalid choice");
                break;
            }
        }
    };
    Operations.prototype.deleteentry = function () {
        console.log("what you want to delete?");
        console.log("1.firstname /n 2.lastname /n 3.number /n 4.state /n 5.city /n 6.exit: ");
        var deletevalue = read.question("");
        switch (deletevalue) {
            case "firstname": {
                var file_name = read.question("confirm file name-->");
                //var extensionname = '.json'
                var json = require("./" + file_name);
                var o = JSON.stringify(json);
                var p = JSON.parse(o);
                var name = read.question("enter name-->");
                if (p['firstname'] == name) {
                    delete p['firstname'];
                }
                else {
                    console.log("no such name");
                }
                var ob = JSON.stringify(p);
                var pa = JSON.parse(ob);
                jsonfile.writeFileSync(file_name, pa);
                this.save();
                break;
            }
            case "lastname": {
                var file_name = read.question("confirm file name-->");
                //var extensionname = '.json'
                var json = require("./" + file_name);
                var o = JSON.stringify(json);
                var p = JSON.parse(o);
                var name = read.question("enter name-->");
                if (p['firstname'] == name) {
                    delete p['lastname'];
                }
                else {
                    console.log("no such name");
                }
                var ob = JSON.stringify(p);
                var pa = JSON.parse(ob);
                jsonfile.writeFileSync(file_name, pa);
                this.save();
                break;
            }
            case "number": {
                var file_name = read.question("confirm file name-->");
                //var extensionname = '.json'
                var json = require("./" + file_name);
                var o = JSON.stringify(json);
                var p = JSON.parse(o);
                var name = read.question("enter name-->");
                if (p['firstname'] == name) {
                    delete p['number'];
                }
                else {
                    console.log("no such name");
                }
                var ob = JSON.stringify(p);
                var pa = JSON.parse(ob);
                jsonfile.writeFileSync(file_name, pa);
                this.save();
                break;
            }
            case "state": {
                var file_name = read.question("confirm file name-->");
                //var extensionname = '.json'
                var json = require("./" + file_name);
                var o = JSON.stringify(json);
                var p = JSON.parse(o);
                var name = read.question("enter name-->");
                if (p['firstname'] == name) {
                    delete p['state'];
                }
                else {
                    console.log("no such name");
                }
                var ob = JSON.stringify(p);
                var pa = JSON.parse(ob);
                jsonfile.writeFileSync(file_name, pa);
                this.save();
                break;
            }
            case "city": {
                var file_name = read.question("confirm file name-->");
                //var extensionname = '.json'
                var json = require("./" + file_name);
                var o = JSON.stringify(json);
                var p = JSON.parse(o);
                var name = read.question("enter name-->");
                if (p['firstname'] == name) {
                    delete p['city'];
                }
                else {
                    console.log("no such name");
                }
                var ob = JSON.stringify(p);
                var pa = JSON.parse(ob);
                jsonfile.writeFileSync(file_name, pa);
                this.save();
                break;
            }
            case "exit": {
                return;
            }
            default: {
                console.log("Invalid choice");
                break;
            }
        }
    };
    Operations.prototype.save = function () {
        console.log("data added and stored successfully...........");
    };
    return Operations;
}());
var Options = /** @class */ (function (_super) {
    __extends(Options, _super);
    function Options() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Options.prototype.create = function () {
        var file = read.question("enter new file name with extension .json-->");
        //var addr = "address";
        var site = {
            "user": []
        };
        var data = JSON.stringify(site);
        fs.writeFileSync(file, data, { flag: 'a' });
    };
    Options.prototype.open = function () {
        // const testFolder = './';
        // fs.readdirSync(testFolder).forEach(file => {
        //     console.log(file);
        //   })
        try {
            var openfile = read.question("enter file name with extension .json-->");
            var rawdata = fs.readFileSync(openfile);
            // parse the raw data into meaningful JSON format
            var author = JSON.parse(rawdata);
        }
        catch (_a) {
            console.log("not found");
        }
        //console.log(author);
        var ch = 0;
        do {
            console.log("choose option and enter choice number : ");
            console.log("1.add");
            console.log("2.edit");
            console.log("3.delete");
            console.log("4.Print");
            console.log("5.quit");
            var ch_1 = parseInt(read.question("enter choice--"));
            //console.log(ch);\
            switch (ch_1) {
                case 1: {
                    //ob.create();
                    this.add();
                    break;
                }
                case 2: {
                    this.edit();
                    break;
                }
                case 3: {
                    this.deleteentry();
                    break;
                }
                case 4: {
                    console.log("Data of----->" + author['firstname']);
                }
                case 5: {
                    return;
                }
                default: {
                    console.log("Invalid choice");
                    break;
                }
            }
        } while (ch != 6);
    };
    return Options;
}(Operations));
exports.Options = Options;
