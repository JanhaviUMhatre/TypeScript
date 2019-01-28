var read = require('readline-sync');

class utility
{
    constructor()
    {}
    
    getinput(): any{
      
        var value = read.question("");
        return value;
    }

    replaceString(username:string,full_name:string,mobile:string): any
    {
        var template = "Hello <<name>>, We have your full name as <<full name>> in our system. your contact number is 91­xxxxxxxxxx. Please,let us know in case of any" 
        +"clarification Thank you BridgeLabz 01/01/2016."
        console.log(username + " " + full_name + " " + mobile );

        var date = new Date().toLocaleDateString();

        template = template.replace("<<name>>",username);

        template = template.replace("<<full name>>",full_name);

        template = template.replace("xxxxxxxxxx",mobile);

        template = template.replace("01/01/2016",date);

        console.log(template);
    }
} 

export = utility;