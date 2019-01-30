export class Inventory
{   
    
    constructor()
    {       
    }

    jsonread():any
    {
        try
        {
            var json = require('./inventory.json');
            //console.log(JSON.parse(json));

            const myObjStr = JSON.stringify(json);

            //console.log(myObjStr);
            var data = JSON.parse(myObjStr);
            return data
            //console.log(x['rice'])
        }
        catch (err)
        {
            console.log("Cannot find module 'inventory.json'");
        }
    }


    rice_details()
    {console.log("------------RICE------------");
        var data = this.jsonread()
        //for rice
        for(var i of data['rice'])
        {   
            console.log("Rice name : "+i['name']+"\nPrice per KG : "+i['price']+"\nAvaibility : "+i['available']);

            console.log("Total Price is : "+i['price']*i['available']+"\n");
        }
    }
    pulse_details(){
        //for pulses
        console.log("------------PULSES------------");
        var data = this.jsonread()
        for(var i of data['pulses'])
        {   
            console.log("pulses name : "+i['name']+"\nPrice per KG : "+i['price']+"\nAvaibility : "+i['available']);

            console.log("Total Price is : "+i['price']*i['available']+"\n");
        }
    }
    wheat_details()
    {
        //for wheats
        console.log("------------WHEATS------------");
        var data = this.jsonread()
        for(var i of data['wheats'])
        {   
            console.log("wheats name : "+i['name']+"\nPrice per KG : "+i['price']+"\nAvaibility : "+i['available']);

            console.log("Total Price is : "+i['price']*i['available']+"\n");
        }
    }
    main()
    {
        console.log("------------INVENTORY------------");
        this.pulse_details();
        this.rice_details();
        this.wheat_details();
    }
    }

var obj = new Inventory();
obj.main();