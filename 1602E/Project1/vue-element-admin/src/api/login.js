import request from '@/utils/request';
var md5 = require('md5');

export function loginByUsername(username, password) {
  const data = {
    username,
    password: md5(password)
  }
  // return request({
  //   url: '/login/login',
  //   method: 'post',
  //   data
  // })
  console.log(username, password);
  fetch('http://169.254.78.172:10001/login',{
    method: 'POST',
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
  }).then(res=>res.json())
  .then(body=>{
    console.log(body);
    // if (body.code == 0)
    alert(body.msg);
  });
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

