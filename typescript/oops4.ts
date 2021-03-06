const fs = require('fs');
const jsonfile = require('jsonfile')
var read = require('readline-sync');
import {Inventory} from './oops1';

class InventoryManage extends Inventory
{
    

    input(): any{                           //take input from user using readline-sync module
      
        var value = read.question("");
        return value;
    }

    readjson_grocery()
    {
        var data = fs.readFileSync('./inventory.json');
        var content = JSON.parse(data);
        return content;
    }

    purchase()
    {
        console.log("Available items in our grocery store:\n")
        console.log("what you want to add ?")
        console.log("\n1.Rice     2.Pulses     3.Wheats\n")
        console.log("Enter Your choice>>>")
        var choice=im.input();
        console.log("Your choice is "+choice)

        if (choice == 1)
        {
            var data = this.readjson_grocery();
            var name = read.question("Enter Name:");
            var price = read.question("Enter price:");
       
            var available:number = read.question("Enter availability:");

        var object={"name":name,
                    "price":price,
                    "available":available};
        
        data.rice.push(object);

        jsonfile.writeFileSync('./inventory.json',data,{flag:'w'});
            // console.log("Rice details");
            // I.rice_details();
            
        }
        else if (choice==2)
        {
            var data = this.readjson_grocery();
            var name = read.question("Enter Name:");
            var price = read.question("Enter price:");
       
            var available:number = read.question("Enter availability:");

        var object={"name":name,
                    "price":price,
                    "available":available};
        
        data.pulses.push(object);

        jsonfile.writeFileSync('./inventory.json',data,{flag:'w'});
            // console.log("Pulses details")
            // I.pulse_details();
        }
        else if (choice==3)
        {
            var data = this.readjson_grocery();
            var name = read.question("Enter Name:");
            var price = read.question("Enter price:");
       
            var available:number = read.question("Enter availability:");

        var object={"name":name,
                    "price":price,
                    "available":available};
        
        data.wheats.push(object);

        jsonfile.writeFileSync('./inventory.json',data,{flag:'w'});
            // console.log("Wheats details")
            // I.wheat_details();
        }
        else
        {
            console.log("Invalid Choice...")
        }
        
    }
}


var i = new Inventory();
var im = new InventoryManage();
//obj.show_avaibility();
im.purchase();