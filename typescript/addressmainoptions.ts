var read = require('readline-sync');
const fs = require('fs');
var path = require('path');
const jsonfile = require('jsonfile')
class Operations
{
    constructor()
    {}
    add(){
        var filename = read.question("confirm file name-->");
        const file = filename;
        var firstname = read.question("firstname-->");
        var lastname = read.question("lastname-->");
        
        var number:string = read.question("number-->");
        var city = read.question("city-->");
        var state = read.question("state-->");
        if (number.length !=10) throw "Number should be of 10 digits...";
        const obj = { firstname: firstname,
            lastname :lastname,
            number:number,
            city:city,
        state:state };
 
jsonfile.writeFileSync(file,obj,{flag:'a'});
        
            
    }
    edit(){
        console.log("1.firstname /n 2.lastname /n 3.number /n 4.exit: ")
        var updatevalue = read.question("");
        
                switch (updatevalue) {
                    case "firstname": {
                        var file_name = read.question("confirm file name-->");
                        var extensionname = '.json'
                        var json = require("./"+file_name+extensionname);
                        const o = JSON.stringify(json);
                        var p = JSON.parse(o);
                        var firstname = read.question("enter new name: ");
                        p["firstname"]=firstname;
                        console.log(p["firstname"]);
                        const ob = JSON.stringify(p);
                        var pa = JSON.parse(ob);
                        jsonfile.writeFileSync(file_name,pa);
                       break;
                    }
                     
                    case "lastname": {
                       //ob.open();
                       break;
                    }
                     
                    case "number": {
                       //ob.save();
                       break;
                    }

                    case "state": {
                        //ob.save();
                        break;
                     }

                        case "city": {
                        //ob.save();
                        break;
                     }
                    case "exit": {
                        return
                       
                     }
                     
                    default: {
                       console.log("Invalid choice");
                       break;
                    }
                 }

            
        
    }
    delete(){

    }
    sorting(){

    }


}

export class Options extends Operations
{

    create(){
        
        var file = read.question("enter new file name with extension .json-->");
        //var addr = "address";
let site = {
	data:'address'	
};
let data = JSON.stringify(site);
fs.writeFileSync(file,data,{flag:'a'});

    }
   

    open(){
        // const testFolder = './';

        // fs.readdirSync(testFolder).forEach(file => {
        //     console.log(file);
        //   })
          
    try{
        var openfile = read.question("enter file name with extension .json-->");
    
        let rawdata = fs.readFileSync(openfile);
// parse the raw data into meaningful JSON format
        var author = JSON.parse(rawdata);
    }
    catch
    {
        console.log("not found")
        
    }
//console.log(author);
var ch: number = 0;
do{
    console.log("choose option and enter choice number : ");
    console.log("1.add");
    console.log("2.edit");
    console.log("3.delete");
    console.log("4.SortData");
    console.log("5.Print");
    console.log("6.quit");
    let ch = parseInt(read.question("enter choice--"));
    //console.log(ch);\
    switch (ch) {
        case 1: {
           //ob.create();
           this.add()
           break;
        }
         
        case 2: {
           this.edit()
           break;
        }
         
        case 3: {
           this.delete();
           break;
        }
         
        case 4: {
           this.sorting()
           break;
        }

        case 5: {
            console.log("Data of----->"+author['firstname']);
           
         }

         case 6: {
            return
           
         }
         
        default: {
           console.log("Invalid choice");
           break;
        }
     

}
}
while(ch!=7);
    }
   
    save(){

    }

    saveas(){

    }
}

