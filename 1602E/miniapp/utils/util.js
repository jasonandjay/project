const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 拼接图片地址
const joinImg = url=>{
  let dir1 = url[0],
      dir2 = url.slice(1, 3),
      rawUrl = url.slice(3),
      type = '';
  const types = ['jpg','jpeg','png','gif'];
  types.forEach(item=>{
    if (url.indexOf(item) != -1){
      type = item;
      return;
    }
  })
  return  `https://fuss10.elemecdn.com/${dir1}/${dir2}/${rawUrl}.${type}`;
}
module.exports = {
  formatTime: formatTime,
  joinImg: joinImg
}
