let un = require('underscore')
let Base = require('../v/c')
export class Ser extends Base {
    public mul(){
        console.log(un.map([1, 2, 3], function(num:any){ return num * 3; }))
    }
    public mulson(){
        console.log("son",un.map([1, 2, 3], function(num:any){ return num * 3; }))
    }
}
//export =  ser 
