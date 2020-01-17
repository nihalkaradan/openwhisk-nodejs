const request = require('request-promise');
function main(params) {
	

  return request("https://reqres.in/api/users?page=2")
  .then(response => {
      console.log("Request 1");
      console.log(response);
      return request("https://reqres.in/api/users/2")
      
    })
    .then(response=>{
        console.log("Request 2");
        console.log(response);
    })
   
}
