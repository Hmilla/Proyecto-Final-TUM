import { makeHttpRequest } from "./config";


export async function create(body, url) {
    return await makeHttpRequest({url, body, method:"POST"})
  } 
  
export async function read(url){
    return await makeHttpRequest({url})
  }

  export async function update(id, body, url){
    return await makeHttpRequest({url, id, body, method:"PUT"})
  }

export async function destroy (url, id){
  return await makeHttpRequest({url, id, method:"DELETE"})
}
