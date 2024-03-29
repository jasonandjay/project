# 我爱学习，学习使我快乐


## git日常操作
- 克隆仓库：git clone git@github.com:jasonandjay/project.git
- 拉取代码：git pull origin master
- 新建分支：git branch chenmanjie
- 删除分支：git branch -d chenmanjie
- 切换分支：git checkout chenmanjie
- 推送远程：git push origin master
- 查看提交记录：git log 
- 回滚代码： git reset --hard(--soft) [commit:6]
- 回滚文件： git checkout -- filepath
- 回到最新代码：git reset HEAD | git pull origin master
- 隐藏当前分支改动： git stash 
- 回退隐藏：git stash pop
- 合并分支：git merge [your branch]
- 会用PR给他人仓库贡献代码

## linux日常操作
- 善用tab健，帮我们补全命令和路径
- 切换文件夹: cd
- 查看当前路径：pwd
- 查看当前文件夹下的文件： ls+ll
- 创建文件夹：mkdir
- 移动文件：mv
- 复制文件：cp
- 删除文件及文件夹：rm -rf(禁止使用)
- 编辑文件：vim
- 查看历史命令：history

## vue项目部署到服务器上，服务器使用nginx
### 简单版 模板为：webpack-simple
- 注释掉.gitignore里的dist，既在dist前面加个#号
- 修改index.html里/dist/build.js为相对路径，在/dist前面加个.
- 修改webpack.config.js里的publickPath为相对路径，在/dist前面加个.

### 复杂版 模板为：webpack
- 注释掉.gitignore里的dist，既在dist前面加个#号
- 修改config/index.js里的build/assetsPublicPath为相对路径，在/前面加个.

### 遇到404，修改文件夹的权限
- chmod 666 -R [dir]

## 服务器配置
### nginx虚拟域名配置
- vim /etc/nginx/sites-available/default
### 配置push钩子，自动化部署代码
- 钩子：/home/ubuntu/server/webhooks/1602E/chenmanjie/webhooks.js
- 部署代码：/home/ubuntu/deploy/1602E/chenmanjie/deploy.sh
- 配置教程：https://www.jianshu.com/p/e4cacd775e5b
- 更改bash不能运行：
    - 报错/bin/bash^M: bad interpreter: No such file or directory
    - 更改文件格式：https://www.cnblogs.com/zyb-pp/p/6429448.html
### 配置邮件服务器，在push钩子里触发，自动通知收件人

### 线上公用接口 
- 公共服务域名,支持https service.jasonandjay.com
#### 文件上传
- formData文件上传    post http://123.206.55.50:11000/upload
```html
<input type="file">
```
```js
支持文件上传,用post方式提交formData对象,键为文件名,值为文件
eg:
var ele = document.querySelector('input');
ele.onchange = function(e){
    console.log('e...', e);
    let files = e.target.files;
    // 创建一个formData
    let form = new FormData();
    for (let i=0,len=files.length; i<len;i++){
        console.log(files[i].name);
        form.append(files[i].name, files[i]);
    }

    axios({
        method: 'post',
        url: 'http://123.206.55.50:11000/upload',
        data: form
    }).then(body=>{
        console.log('body...', body);
    }).catch(e=>{
        console.log('e..', e);
    })
    
     // jquery版本
    let input = document.querySelector('input');
    input.onchange = function(e){
        console.log('e..', e.target.files);
        let form = new FormData();
        for (let i=0,len=e.target.files.length; i<len; i++){
            form.append(e.target.files[i].name, e.target.files[i]);
        }

        $.ajax({
            method: 'post',
            url: 'http://123.206.55.50:11000/upload',
            processData: false,
            contentType: false,
            data: form,
            dataType:"json",
            success: function(res){
                console.log('res...', res)
            }
        })
    }
}

```
- base64图片上传 post http://123.206.55.50:11000/upload_base64
``` html
<input type="file">
```
``` js
var ele = document.querySelector('input');
ele.onchange = function(e){
    let files = e.target.files;
    var reader = new FileReader();
    reader.onload = function(){
        console.log('result...', this.result);
        axios({
            method: 'post',
            url: 'http://123.206.55.50:11000/upload_base64',
            data: {base64: this.result}
        }).then(body=>{
            console.log('body...', body);
        }).catch(e=>{
            console.log('e..', e);
        })
    }
    reader.readAsDataURL(files[0]);
}
```
- 图片转成base64 post http://123.206.55.50:11000/tobase64
``` js
axios({
    method: 'post',
    url: 'http://123.206.55.50:11000/tobase64',
    data: {url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3360034032,4096528553&fm=26&gp=0.jpg'}
}).then(body=>{
    console.log('body...', body);
}).catch(e=>{
    console.log('e..', e);
})
```

#### 短信验证码接口
- 发送短信验证码   http://123.206.55.50:11000/smsCode 五分钟有效期
```
post phone='your phone'
```
- 验证短信验证码
