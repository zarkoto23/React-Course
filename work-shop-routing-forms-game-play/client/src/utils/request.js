 async function request(method, url, data,options={}) {

if(method!=='GET'){
    options.method=method
    
}

if(data){
    options={
        ...options,
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }
}
  const response = await fetch(url, options);
  const result = await response.json();
  
  return result;
}

export default{
     get:(url)=>request("GET", url),
    post:request.bind(null, 'POST'),
    put:request.bind(null, 'PUT'),
    del:request.bind(null, 'DELETE'),

}



