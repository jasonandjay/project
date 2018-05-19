<template>
    <p>登陆状态：{{isLogin?'已登录':'已注销'}}</p>    
</template>

<script>
    export default {
        data: function(){
            return {
                // isLogin: false
            }
        },
        props: {
            isLogin: ''
        }
    }
</script>