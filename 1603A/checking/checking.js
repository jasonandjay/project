var fs = require('fs');
var path = require('path');
var XLSX = require('xlsx');

// 拼接试卷的根路径
var root = path.join(__dirname, '/src');
console.log(root);

// 遍历src文件夹，查找需要批阅的试卷
let files = [];
((path) => {
    var pa = fs.readdirSync(path);
    pa.forEach(function (ele, index) {
        var info = fs.statSync(path + "/" + ele)
        if (info.isDirectory()) {
            console.log("dir: " + ele)
            readDirSync(path + "/" + ele);
        } else {
            // console.log("file: "+ele)
            files.push(path + "/" + ele);
        }
    })
})(root);
// console.log(files);

// 批阅试卷
// 需要读取答案的位置
var answerPos = ['B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15',
    'B16', 'B17', 'B18', 'B19', 'B20', 'B21', 'B22', 'B23', 'B24',
    'B27', 'B28', 'B29', 'B30', 'B31', 'B32', 'B33', 'B34', 'B35', 'B36',
    'B39', 'B40', 'B41', 'B42', 'B43', 'B44', 'B45', 'B46', 'B47', 'B48'
]
var correctAnswer = ['B',
'A',
'C',
'A',
'B',
'C',
'D',
'B',
'A',
'C',
'B',
'C',
'C',
'B',
'C',
'A',
'C',
'B',
'C',
'A',
'ABD',
'ACD',
'ABCD',
'ABC',
'ABCD',
'BC',
'AB',
'ABC',
'ABCD',
'BC',
'A',
'B',
'A',
'A',
'A',
'B',
'B',
'A',
'A',
'B'];
var result = [];
files.forEach((item, index) => {
    var data = XLSX.readFile(item);
    // console.log(data);
    // console.log('/n................/n');
    // console.log(data.Sheets.Sheet1);
    
    // 获取学生答案
    let answer = [];
    answerPos.forEach((value, key) => {
        answer.push(data.Sheets.Sheet1[value].w);
    })
    // console.log(answer);

    // 校验答案
    let score = 0;
    for (var i=0;i<40;i++){
        if (i<20){
            if (answer[i] == correctAnswer[i]){
                score += 3;
            }
        }else{
            if (answer[i] == correctAnswer[i]){
                score += 2;
            }
        }
    }

    // 记录答案
    result.push({
        item: item.replace(root+'/', ''),
        score
    })
});


// 输出答案
console.log(result);