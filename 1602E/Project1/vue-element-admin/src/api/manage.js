export let getUserList = ()=>{
  return fetch('http://127.0.0.1:10001/userList').then(res=>res.json())
}
