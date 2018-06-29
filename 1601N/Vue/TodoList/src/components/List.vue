<template>
    <div>
        <ul>
            <li v-for="(item, index) in list" :key="index">{{item}}</li>
        </ul>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        // 用mapState方法获取state
        computed: mapState({
            list: state=>state.list.list
        })
    }
</script>
