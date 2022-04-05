const Permission = require('../defaultAuth/models/Permission')
const Role = require('../defaultAuth/models/Role')
class FakeData {
    // permissions
    constructor() {
        this.Fake()
    }
   Fake(){
       var newPermission = new Permission({
           name:'Users',
           description: 'This is admin role'
       });
       Permission.addPermission(newPermission,(err, data) => {
           console.log('in save');
           if (err) {
               console.log(err);
           } else {
               console.log(data);
           }
       })
       process.exit();
   }


}

module.exports = FakeData
