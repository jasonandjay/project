# 我爱学习，学习使我快乐


## git日常操作
- 克隆仓库：git clone git@github.com:jasonandjay/project.git
- 拉取代码：git pull origin master
- 新建分支：git branch chenmanjie
- 删除分支：git branch -d chenmanjie
- 切换分支：git checkout chenmanjie
- 推送远程：git push origin master
- 查看提交记录：git log 
- 回滚代码： git reset --hard [commit:6]
- 回到最新代码：git reset HEAD | git pull origin master

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
- 修改config/index.js里的build/assetsPublicPath为相对路径，在/dist前面加个.

## 启动一些线上服务
### 短信验证码服务


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
