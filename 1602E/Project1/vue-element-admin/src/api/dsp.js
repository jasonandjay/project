/**
 * 创意列表接口
 * @param {customerId}  int     客户ID
 * @param {startTime}   string  开始时间  时间戳
 * @param {endTime}     string  结束时间  时间戳
 * @param {pageNum}     int     页码
 * @param {pageSize}    int     每页大小
 * @param {campaingnId} int     计划ID    选填
 * @param {adunitId}    int     单元ID    选填
 * @param {content}     string  查询内容  选填
 * @param {queryType}   int     查询类型  选填 1-按照创意ID,2-创意名称
 * @param {statusList}  array   创意状态列表 选填  默认为未删除；为null表示查询全部，筛选条件
 *
 */
// export let creativeList = (customerId, startTime, endTime, pageNum = 1, pageSize = 50, campaingnId, adunitId, content, queryType, statusList)=>{
//     let data = {
//       customerId,
//       startTime,
//       endTime,
//       pageNum,
//       pageSize,
//       campaingnId,
//       adunitId,
//       content,
//       queryType,
//       statusList
//     }
//     fetch('http://dsp.zybang.com/dsp-creative/creative/list', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json; charset=utf-8'
//       },
//       data
//     }).then(res=>res.json()).then(body=>{
//       console.log('body...', body);
//     })
// }

export let creativeList = (params)=>{
  params = Object.assign({}, {page: 1, pageSize:50}, params);
  console.log(params);
  fetch('http://169.254.78.172:10001/jsonRequest', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      // 'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(params)
  }).then(res=>res.json()).then(body=>{
    console.log('body...', body);
  })
}
