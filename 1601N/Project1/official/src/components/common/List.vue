<template>
    <div class="list">
        <div v-for="(item, index) in brandList" :key="index" :id="item.speeling">
            <p>{{item.speeling}}</p>
            <ul>
                <li v-for="(value, key) in item.list" :key="key" @click="getMasterList(value.MasterID)">
                    <img :data-src="value.CoverPhoto">
                    <span>{{value.Name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        brandList: {
            type: Array,
            default: []
        },
        getMasterList: {
            type: Function,
            default: ()=>{}
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../scss/_brandList.scss';
</style>

