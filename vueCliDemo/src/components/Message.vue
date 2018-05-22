<template>
    <div>
        <h1>我是消息页{{this.$route.params.id}}</h1>
        <router-view/>
        <div>
            <!-- 放置两个按钮导航到已读页面和未读页面 -->
            <!-- <button @click="goRead">去已读消息页面</button> -->
            <!-- <button @click="goUnread">去未读消息页面</button> -->

            <router-link :to='{path:"/message/read", query:{x:1,y:2}}'>去已读消息页面</router-link>
            <router-link :to='{name:"Unread", params:{a:3,b:4}}'>去未读消息页面</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {}
        },
        props: {
            id:''
        },
        methods: {
            goRead(){
                this.$router.push({path:'/message/read'})
            },
            goUnread(){
                this.$router.push({name:'Unread', params:{a:3,b:4}})
            }
        },
        mounted: function(){
            console.log('router...', this.$router, 'route...', this.$route);
        }
    }
</script>