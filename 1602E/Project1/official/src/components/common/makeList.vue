<template>
    <section>
        <ul v-for="(item, index) in makeList" :key="index">
            <p>{{item.GroupName}}</p>
            <li v-for="(value, key) in item.GroupList" :key="key">
                <img :src="value.CoverPhoto">
                <div>
                    <p>{{value.AliasName}}</p>
                    <p>{{value.DealerPrice}}</p>
                </div>
            </li>
        </ul>
    </section>
</template>
<script>
    import {mapState} from 'vuex';
    export default{
        computed: {
            ...mapState({
                makeList: state=>state.index.makeList
            })
        }
    }
</script>
