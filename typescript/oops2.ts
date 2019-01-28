import { isNumber } from "util";

var util = require('./utility');
var utility = new util();

class Replace
{
    getinput()
    {
        try
        {
            console.log("Enter UserName:");
            var username:string = utility.getinput();
            if (username == "") throw "Username required...";

            console.log("Enter Full Name:");
            var full_name:string = utility.getinput();
            if (full_name == "") throw "full name required...";

            console.log("Enter Mobile Number:");
            var mobile : string = utility.getinput();
            if (mobile == "") throw "Number required...";
            if (mobile.length !=10) throw "Number should be of 10 digits...";
            utility.replaceString(username,full_name,mobile);

        }
        catch (err)
        {
            console.log(err);
            console.log("Try again...");
            this.getinput();
        }

    }
}
var object = new Replace();
object.getinput();