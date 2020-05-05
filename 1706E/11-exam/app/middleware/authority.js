const jwt = require('jsonwebtoken');

// 不带token的访问白名单
const whiteList = ['/login', '/register'];
module.exports = () => {
    return async function checkAuthority(ctx, next){
        let token = ctx.get('token');
        
        if (whiteList.indexOf(ctx.path) !== -1){
            // 1.判断是否是白名单内的路由
            await next();
        }else if (token){
            // 2.有token，校验token
            jwt.verify(token, 'bawei', async (err, info)=>{
                if (err){
                    ctx.body = {
                        code: -200,
                        msg: 'token校验失败',
                        err
                    }
                }else{
                    // 从info中拿到authority，判断用户权限
                    let {authority} = info;
                    if (authority == 'v2'){
                        if (ctx.path == '/delete'){
                            ctx.body = {
                                code: -300,
                                msg: '你当前身份是v2,没有权限访问删除接口'
                            }
                            return;
                        }
                    }else if(authority == 'v3'){
                        if (ctx.path == '/delete' || ctx.path == '/add'){
                            ctx.body = {
                                code: -300,
                                msg: '你当前身份是v3,没有权限访问删除和编辑接口'
                            }
                            return;
                        }
                    }
                    await next();
                }
            })
        }else{
            // 3.没有token也不在白名单，直接拦截
            ctx.body = {
                code: -100,
                msg: '请先登陆'
            }
        }
    }
}