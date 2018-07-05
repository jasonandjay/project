<template>
    <div class="master">
        <div v-for="(item, index) in masterList" :key="index">
            <p class="name">{{item.GroupName}}</p>
            <ul>
                <li v-for="(value, key) in item.GroupList" :key="key">
                    <img :src="value.Picture">
                    <div>
                        <p>{{value.AliasName}}</p>
                        <p>{{value.DealerPrice}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>    
</template>

<script>
export default {
    props: {
        masterList: {
            type: Array
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../../scss/_masterList.scss';
</style>

