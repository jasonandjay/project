<template>
    <p>我是详情页</p>
</template>

<script>
export default {
    data(){
        return {}
    },
    mounted(){
        let id = this.$route.query.id;
        // fetch('https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID='+id)
        // .then(res=>{
        //     return res.json()
        // }).then(body=>{
        //     console.log('body...', body);
        //     let yearList = ['9999'];
        //     let carList = {'9999':[]};
        //     // 处理年份
        //     body.data.list.forEach(item=>{
        //         let year = item.market_attribute.year;
        //         if (yearList.indexOf(year) != -1){
        //             carList[year].push(item);
        //         }else{
        //             yearList.push(year);
        //             carList[year] = [item];
        //         }
        //         carList['9999'].push(item);
        //     })
        //     console.log(yearList, carList);
        //     // 排序
        //     let sortCar = (arr)=>{
        //         return arr.sort((a, b)=>{
        //             if (a.exhaust < b.exhaust){
        //                 return -1;
        //             }else if(a.exhaust > b.exhaust){
        //                 return 1;
        //             }else{
        //                 if (a.max_power < b.max_power){
        //                     return -1;
        //                 }else if(a.max_power > b.max_power){
        //                     return 1;
        //                 }else{
        //                     return b.inhale_type - a.inhale_type;
        //                 }
        //             }
        //         })
        //     }
        //     for (let i in carList){
        //         carList[i] = sortCar(carList[i]);
        //     }
        //     console.log('carList...', carList);
        // })

        fetch('https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID='+id)
        .then(res=>{
            return res.json()
        }).then(body=>{
            console.log('body...', body);
            let yearList = ['9999'];
            let carList = [];
            // 处理年份
            body.data.list.forEach(item=>{
                let year = item.market_attribute.year;
                if (yearList.indexOf(year) == -1){
                    yearList.push(year);
                }
                carList.push(item);
            })
            console.log(yearList, carList);
            // 排序

            /**
             * 用于车辆排序
             * @param arr Array 需要排序的车辆列表
             * @return Array 排序后的数组
             */
            let sortCar = (arr)=>{
                return arr.sort((a, b)=>{
                    if (a.exhaust < b.exhaust){
                        return -1;
                    }else if(a.exhaust > b.exhaust){
                        return 1;
                    }else{
                        if (a.max_power < b.max_power){
                            return -1;
                        }else if(a.max_power > b.max_power){
                            return 1;
                        }else{
                            return b.inhale_type - a.inhale_type;
                        }
                    }
                })
            }
            carList = sortCar(carList);
            console.log('carList...', carList);
            let arr = carList.filter((item)=>{
                 let year = item.market_attribute.year;
                 return year == '2018'
            })
            console.log('arr...', arr);
             let arr2 = carList.filter((item)=>{
                 let year = item.market_attribute.year;
                 return year == '2017'
            })
            console.log('arr...', arr2);

            // some方法
            let flag = carList.some((item)=>{
                let year = item.market_attribute.year;
                 return year == '2016'
            })

            // some方法
            let flag2 = carList.every((item)=>{
                let year = item.market_attribute.year;
                 return year == '2016'
            })

            console.log('flag：', flag, 'flag2：', flag2);
        })
    }
}
</script>
