import cookie from 'js-cookie';

/**
 * 合并参数相同的车辆
 * @param {*} list 车辆列表
 * @returns 一个对象,key为参数，value为参数相同车辆组成的数组
 */
export function mergeCar(list){
    let keys = [],
        arr = {};
    list.forEach((item)=>{
        // 拼接需要的key
        let key = item.exhaust_str+'/'+item.max_power_str+' '+item.inhale_type;
        if (keys.indexOf(key) != -1){
            arr[key].push(item);
        }else{
            keys.push(key);
            arr[key] = [item];
        }
    })
    return arr;
}

/**
 * 排序车里
 * @param {*} list 车辆列表
 * @returns 排序后的车辆列表
 */
export function sortCar(list){
    return list.sort((a, b)=>{
        // 根据排量排序 升序
        if (a.exhaust != b.exhaust){
            return a.exhaust - b.exhaust;
        }else{
            // 根据发动机功率排序 升序
            if (a.max_power_str !=b.max_power_str){
                return a.max_power_str - b.max_power_str;
            }else{
                // 根据吸气方式排序
                if (a.inhale_type != b.inhale_type){
                    return a.inhale_type - b.inhale_type;
                }else{
                    // 根据年份排序 降序
                    return b.market_attribute.year - a.market_attribute.year;
                }
            }
        }
    })
}

/**
 * 根据年份过滤车辆
 * @param {*} year 年份
 * @param {*} list 车辆列表
 * @returns 符合年份的列表
 */
export function filter(year, list){
    return list.filter(item=>item.market_attribute.year == year);
}
/**
 *获取token
 * @export
 * @returns
 */
export function getToken(){
    return cookie.get('token');
}

/**
 * 设置token，过期时间为10s后
 * @export
 * @param {*} token 登陆态
 */
export function setToken(token){
    cookie.set('token', token, {expires: new Date((+new Date())+7*24*60*60*1000)});
}
