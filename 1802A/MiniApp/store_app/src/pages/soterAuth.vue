<template>
    <button @click="startAuth">开始识别</button>
</template>

<script>
export default {
    data(){
        return {
            authModes: []
        }
    },
    /** 
     * onLoad 页面加载的时候,页面进栈的时候会触发
     * onReady 页面准备好,页面进栈的时候触发
     * onShow 页面显示的时候就会触发
     * onHide 页面隐藏的时候触发
     * onUnload 页面出栈的时候触发
    */
    onShow(){
        wx.checkIsSupportSoterAuthentication({
            success:(res)=>{
                this.authModes = res.supportMode; 
            }
        })
    },
    methods: {
        startAuth(){
            if (!this.authModes.length){
                wx.showToast({
                  title: '你的设备暂不支持生物识别', //提示的内容,
                  icon: 'none', //图标,
                });
            }else{
                let mode = [...this.authModes].pop();
                wx.startSoterAuthentication({
                    requestAuthModes: [mode],
                    challenge: '123456',
                    authContent: mode==='facial'?'请开始脸部识别': '请用指纹解锁',
                    success(res) {
                        console.log('res...', res);
                    }
                })
            }
        }
    }
}
</script>