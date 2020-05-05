module.exports = {
    randomClass(total, num){
        console.log('总人数...', total, '班级数...', num);
        let arr = [];
        // 生成长度为total的数组，每一项就是一个学生
        for (let i=1;i<=total;i++){
            arr.push(i);
        }
        // 随机打乱
        arr.sort((a,b)=>{
            return Math.random()>.5?1:-1;
        })
        
        
        let len = Math.floor(total/num);
        for (let i=1;i<=num;i++){
            let persons = arr.slice((i-1)*len, i*len);
            if (i == num){
                persons = arr.slice((i-1)*len);
            }
            persons.sort((a,b)=>a-b);
            console.log(`第${i}组名单为:`, persons);
        }
    }
}