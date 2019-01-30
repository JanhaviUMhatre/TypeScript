var read = require('readline-sync');
var jsonfile = require('jsonfile');
var fs = require('fs');
var Mainclinique = /** @class */ (function () {
    function Mainclinique() {
    }
    Mainclinique.prototype.clinique = function () {
        console.log("-----WELCOME-----");
        var ch = 0;
        do {
            console.log("choose option and enter choice number : ");
            console.log("1.register");
            console.log("2.user");
            console.log("3.doctor list");
            console.log("4.exit");
            var ch_1 = parseInt(read.question("enter choice--"));
            //console.log(ch);\
            switch (ch_1) {
                case 1: {
                    this.register();
                    break;
                }
                case 2: {
                    this.user();
                    break;
                }
                case 3: {
                    this.doclist();
                    break;
                }
                case 4: {
                    return;
                }
                default: {
                    console.log("Invalid choice");
                    break;
                }
            }
        } while (ch != 5);
    };
    Mainclinique.prototype.register = function () {
        //const file = require('./patient.json');
        var z = this.readjsonfile();
        var size = z.size;
        var firstname = read.question("name-->");
        var number = read.question("number-->");
        if (number.length != 10)
            throw "Number should be of 10 digits...";
        var age = read.question("age-->");
        //   var z = {
        //       "patients":[]
        //   };
        var patient = { name: firstname,
            id: size,
            number: number,
            age: age,
            doctor: ""
        };
        z.patients.push(patient);
        jsonfile.writeFileSync('./patient.json', z, { flag: 'w' });
        z.size++;
    };
    Mainclinique.prototype.readjsonfile = function () {
        var data = fs.readFileSync('./patient.json');
        var content = JSON.parse(data);
        return content;
    };
    Mainclinique.prototype.readjsonfiledoc = function () {
        var data = fs.readFileSync('./doctor.json');
        var content = JSON.parse(data);
        return content;
    };
    Mainclinique.prototype.user = function () {
        console.log("-----USER-----");
        var ch = 0;
        do {
            console.log("choose option and enter choice number : ");
            console.log("1.availability");
            console.log("2.appointment");
            console.log("3.exit");
            var ch_2 = parseInt(read.question("enter choice--"));
            //console.log(ch);\
            switch (ch_2) {
                case 1: {
                    var z = this.readjsonfiledoc();
                    console.log("----------------------------------------");
                    for (var _i = 0, _a = z['doctors']; _i < _a.length; _i++) {
                        var i = _a[_i];
                        console.log(i['name'] + "\t" + i['Specialist'] + "\t" + i['available'] + "\t" + i['id']);
                    }
                    console.log("----------------------------------------");
                    break;
                }
                case 2: {
                    var r = this.readjsonfiledoc();
                    var n = 1;
                    var app = read.question("enter id -->");
                    var name = read.question("enter name -->");
                    for (i = 1; i < 11; i++) {
                        r.doctors[app - 1].appointments = ["name:" + name + " " + "appointment no:" + n];
                    }
                    n++;
                    //    r.doctors[app-1].appointments=["name:"+name];
                    //console.log(r);
                    jsonfile.writeFileSync('./doctor.json', r, { flag: 'w' });
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
    Mainclinique.prototype.doclist = function () {
        var z = this.readjsonfiledoc();
        console.log("----------------------------------------");
        for (var _i = 0, _a = z['doctors']; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log(i['name'] + "\t" + i['Specialist'] + "\t" + i['available']);
        }
        console.log("----------------------------------------");
    };
    return Mainclinique;
}());
var obj = new Mainclinique();
obj.clinique();
