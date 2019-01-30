var read = require('readline-sync');
const jsonfile = require('jsonfile')
class Stockmanage{
    constructor()
    {

    }
    stockm()
    {
        console.log("1.buy  2.sell");
        var a = read.question("");
        if(a=1)
        {
            this.buy();
        }
        if(a=2)
        {
            this.sell();
        }
    }
    readperson()
    {
       
        try
        {
            var json = require('./person.json');

            const myObjStr = JSON.stringify(json);

            var data = JSON.parse(myObjStr);
           return data;
            
        }
        catch (err)
        {
            console.log("Cannot find module 'person.json'");
        }
    }
    readstock(){
        try
        {
            var json = require('./stock.json');

            const myObjStr = JSON.stringify(json);

            var data = JSON.parse(myObjStr);
           return data;
            
        }
        catch (err)
        {
            console.log("Cannot find module 'stock.json'");
        }
    }
    buy()
    {
        var z = this.readperson();
        
        var x = this.readstock();
        var b = read.question("enter share you want to buy? ");
        var n = read.question("how many? ");
        for(var i of z['details']){
            for(var j of i['name']){
        z.details.total=i['total']-n;
        jsonfile.writeFileSync('./stock.json',x,{flag:'w'});
        }}
    }
    sell(){
        
        }

    
}
var obj = new Stockmanage();
obj.stockm();