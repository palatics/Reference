/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 3.0.0
 * @author Shane Cox
 * @license MIT
 */

 class EasyHTTP{
     //Make an http get request
     async get(url){
        const response = await fetch(url);

        const resData = await response.json();

        return resData;
     }

     //Make http post request
     async post(url, data){
        const response = await fetch(url, {
            method: 'Post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;      
    }

    // Make an http post request
    async put(url, data){
        const response =  await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const resData = await response.json();
        return resData;
    }

    // Make an http delete request
    async delete(url){  
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        });

        const resData = await 'Resource Deleted';
        return resData;      
    }
 }