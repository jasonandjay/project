const https = require('https');
const fs = require('fs');
var htmlDocx = require('html-docx-js');

let result = [];
for (let i=1;i<2;i++){
    https.get('https://36kr.com/api//search/entity-search?page=1&per_page=40&keyword=%E6%BB%B4%E6%BB%B4&entity_type=post&_=1534314857065', (res) => {
        let data = [];

        res.on('data', (d) => {
            data.push(d);
        });
        res.on('end', ()=>{
            let buf = Buffer.concat(data).toString();
            buf = JSON.parse(buf);
            // console.log(buf);
            // 处理一下数据
            buf.data.items.forEach((item, index)=>{
                result.push({
                    id: item.id,
                    title: item.title
                })
                if (index < 10){
                    get_file(`https://36kr.com/p/${item.id}.html`)
                    .then(res=>{
                        var converted = htmlDocx.asBlob(res);
                        // saveAs(converted, 'test.docx');
                        console.log('res...', res);
                        // 把数据写到word里去
                        fs.writeFile(`./36kr/${item.title}.docx`, converted, (err)=>{
                            if (err) throw err;
                            console.log(`文件${item.title}写入成功!`);
                        })
                    })
                }
               
            })
        })
    }).on('error', (e) => {
        console.error(e);
    });
}

function get_file(url){
    return new Promise((resolve, reject)=>{
        https.get(url, (res) => {
            let data = [];
            res.on('data', (d) => {
                data.push(d);
            });
            res.on('end', ()=>{
                let buf = Buffer.concat(data).toString();
                resolve(buf);
            })
        });
    })
}

