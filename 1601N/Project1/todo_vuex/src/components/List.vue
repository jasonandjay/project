<template>
    <div>
        <p>
            <span @click="changeType('all')">全部</span>
            <span @click="changeType('finish')">已完成</span>
            <span @click="changeType('unfinish')">未完成</span>
        </p>
        <ul>
            <li @click="finish(item)" v-for="(item, index) in list" :key="index" :style="{textDecoration:item.finish?'line-through':''}">{{item.text}}</li>
        </ul>
    </div>
</template>


<script>
import {mapState, mapMutations} from 'vuex';
export default {
    computed: {
        ...mapState({
            list: state=>{
                if (state.list.type == 'all'){
                    return state.list.list;
                }else{
                    return state.list.list.filter(item=>{
                        return item.finish == (state.list.type=='finish')
                    })
                }
            }
        })
    },
    methods: {
        ...mapMutations({
            finish: 'finish',
            changeType: 'changeType'
        })
    }
}
</script>
