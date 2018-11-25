const axios = require('axios');
axios({method:'post',data:{id:''},url:'localhost:3006'}).then(value=>console.log(value) )