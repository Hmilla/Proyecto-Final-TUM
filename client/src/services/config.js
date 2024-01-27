const BASEUrl = "http://localhost:3002/"; 

export async function makeHttpRequest({url, id, body, method='GET'}){
    const finalUrl = id ? `${url}/${id}` : url

    const response = await fetch(`${BASEUrl}${finalUrl}`, {
        method,
        headers : {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
    
      const data = await response.json();
    
      return data;
}