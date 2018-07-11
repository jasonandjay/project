<template>
    <div>
        <ul>
            <li @click="finish(index)" v-for="(item, index) in list" :key="index" :style="{textDecoration:item.finish?'line-through':''}">{{item.text}}</li>
        </ul>
    </div>
</template>


<script>
import {mapState, mapMutations} from 'vuex';
export default {
    computed: {
        ...mapState({
            list: state=>state.list.list
        })
    },
    methods: {
        ...mapMutations({
            finish: 'finish'
        })
    }
}
</script>
