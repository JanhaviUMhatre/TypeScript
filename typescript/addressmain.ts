var read = require('readline-sync');
import {Options} from './addressmainoptions';
class AddressBook
{
    constructor()
    {
        
    }

    mainaddress() : any
    {
        var ob = new Options;
        console.log("**********WELCOME TO ADDRESS BOOK**********");
        var ch: number = 0;
            do{
                console.log("choose option and enter choice number : ");
                console.log("1.create");
                console.log("2.open");
         
                console.log("3.quit");
                let ch = parseInt(read.question("enter choice--"));
                //console.log(ch);\
                switch (ch) {
                    case 1: {
                       ob.create();
                       break;
                    }
                     
                    case 2: {
                       ob.open();
                       break;
                    }
                    case 3: {
                        return
                       
                     }
                     
                    default: {
                       console.log("Invalid choice");
                       break;
                    }
                 }

            }
            while(ch!=4);
    }
}
var obj = new AddressBook();
obj.mainaddress()