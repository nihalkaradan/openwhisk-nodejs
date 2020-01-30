/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
const request = require('request-promise');
const axios = require('axios');
const csv = require('csv-parse');
const express = require('express');
async function multReq(requestUrls){
     
      try{  
                
            
            const[response1,response2,response3] = await Promise.all(requestUrls.map((url,index)=>{
                //console.log(url['url']);
                return request(url['url']);
            }));
            console.log("Response 1 is \n",response1);
            console.log("Response 2 is \n",response2);
            console.log("done with the loop");
            return [response1,response2,response3]
        }catch(e){
            console.log(e);
        }
}
async function main(params) {
if(params.L1ORL2Indicator=='L2'){
    console.log(params);

    urls=['https://reqres.in/api/users?page=2','https://reqres.in/api/users/2'];

    let obj ;
    let requestUrls=[];
    
    let requestResponses=[];
    let res1,res2,res3;
    let multResponse=[];
      await request('http://nihalkaradan.github.io/assets/JSON/urls.json')
                .then(resp=>{
                    obj = JSON.parse(resp);
                   // console.log(obj['getClaimData'][0]['getClaimData_ACC']);
                    
                    obj['getClaimData'][0]['getClaimData_ACC'].map((url)=>{
                        
                      requestUrls.push(url);
                    });
                    
                });
        //console.log(requestUrls);
       await  multReq(requestUrls);            
                    
                
      
        
         
    }
    else if(params.L1ORL2Indicator=='L1'){
        
        return {params}
    }
    //response = request('http://nihalkaradan.github.io/assets/JSON/urls.json');
    
    
    // await axios.all().then(axios.spread((...responses) => {
    //     console.log(responses[0]);
    //     const responseOne = responses[0]
    //     // const responseTwo = responses[1]
    //     // const responesThree = responses[2]
    //     console.log(responseOne);
    //         // use/access the results 
    //     })).catch(errors => {
    //         // react on errors.
    //     })
          
        //   try{  
                
            
        //     const[res1,res2,re3] = await Promise.all(requestUrls.map((url)=>{
        //         return request(url);
        //     }));
        //     console.log("Response 1 is \n",res1);
        //     console.log("Response 2 is \n",res2);
        //     console.log("done with the loop");
        // }catch(e){
        //     console.log(e);
        // }
        
  
   


   
}