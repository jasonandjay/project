var fs = require('fs');
var path = require('path');
var XLSX = require('xlsx');

// 读取试卷文件列表
const readChecking = ()=>{
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

    return files;
}

// 读取理论答案文件
const readAnswer = ()=>{
    let answerPath = path.join(__dirname, '/answer');
    // 读取答案文件
    let answerFiles = [];
    ((path) => {
        var pa = fs.readdirSync(path);
        pa.forEach(function (ele, index) {
            var info = fs.statSync(path + "/" + ele)
            if (info.isDirectory()) {
                console.log("dir: " + ele)
                readDirSync(path + "/" + ele);
            } else {
                answerFiles.push(path + "/" + ele);
            }
        })
    })(answerPath);
    var data = XLSX.readFile(answerFiles[0]);
    // console.log(data.Sheets);

    // 拼接答案位置：J2~J41
    let pos = [];
    for (let i=2;i<=41;i++){
        pos.push(`J${i}`);
    }

    // 通过答案位置获取答案
    let answer = [];
    pos.forEach((value, key) => {
        answer.push(data.Sheets['试题模板'][value].w);
    })
    // console.log(answer);

    // 返回答案
    // return answer;
    return ['D','A','B','A','A','C','B','C','D','A','A','D','A','D','C','A','B','D','B','A',
    'AD','AB','ACD','AD','BD','AB','AD','BC','ABD','ABC',
    'A','A','B','A','B','B','B','A','A','A']
}

// 批阅试卷
const checkingFile = (files, correctAnswer)=>{
    // 需要读取答案的位置
    var answerPos = ['B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15',
        'B16', 'B17', 'B18', 'B19', 'B20', 'B21', 'B22', 'B23', 'B24',
        'B27', 'B28', 'B29', 'B30', 'B31', 'B32', 'B33', 'B34', 'B35', 'B36',
        'B39', 'B40', 'B41', 'B42', 'B43', 'B44', 'B45', 'B46', 'B47', 'B48'
    ]
    
    // 读取文件中的答案
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
            }else if(i>=20 & i< 30){
                if (answer[i] == correctAnswer[i]){
                    score += 2;
                }
            }else{
                if (correctAnswer[i] == 'A'){
                    console.log('A对√'.indexOf(answer[i]));
                    if ('A对√'.indexOf(answer[i]) != -1){
                        score += 2;
                    }
                }else{
                    if('B错×'.indexOf(answer[i]) != -1){
                        score += 2;
                    }
                }
            }
        }

        var root = path.join(__dirname, '/src');
        // 记录答案
        result.push({
            item: item.replace(root+'/', ''),
            score
        })
    });
    return result;
}

let files = readChecking();
let correctAnswer = readAnswer();
let result = checkingFile(files, correctAnswer);

// 输出答案
console.log(result);