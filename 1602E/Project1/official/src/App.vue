<template>
    <keep-alive exclude="Index">
        <!-- <router-view></router-view> -->
        <div>
            <p v-myShow="true" v-for="(item, index) in list " :key="index">{{item.text}}</p>
        </div>
    </keep-alive>
</template>
<script>
    export default{
        data(){
            return {
                list: [{
                    text: '第一条数据',
                    status: 1
                },{
                    text: '第二条数据',
                    status: 2
                },{
                    text: '第三条数据',
                    status: 1
                },{
                    text: '第四条数据',
                    status: 2
                }]
            }
        }
    }
</script>
<style>
	*{
		margin: 0;
		padding: 0;
	}
	html, body{
		height: 100%;
	}
    li{
        list-style: none;
    }
</style>
