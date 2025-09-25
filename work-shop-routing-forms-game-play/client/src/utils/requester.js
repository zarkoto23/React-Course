export async function request(method, url, data) {
  let options = {}

  if(data&& Object.keys(data).length>0){
    options={
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
}
  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);
  
  return result;
}
