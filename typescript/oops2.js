var util = require('./utility');
var utility = new util();
var RegExpression = /** @class */ (function () {
    function RegExpression() {
    }
    RegExpression.prototype.getinput = function () {
        try {
            console.log("Enter UserName:");
            var username = utility.getinput();
            if (username == "")
                throw "Username required...";
            console.log("Enter Full Name:");
            var full_name = utility.getinput();
            if (full_name == "")
                throw "full name required...";
            console.log("Enter Mobile Number:");
            var mobile = utility.getinput();
            if (mobile == "")
                throw "Number required...";
            if (mobile.length != 10)
                throw "Number should be of 10 digits...";
            // console.log(typeof(mobile));
            // var z : number = parseInt(mobile);
            // console.log(typeof(z));
            utility.replaceString(username, full_name, mobile);
        }
        catch (err) {
            console.log(err);
            console.log("Try again...");
            this.getinput();
        }
    };
    return RegExpression;
}());
var object = new RegExpression();
object.getinput();
