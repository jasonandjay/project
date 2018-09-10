<template>
    <div class="cityList">
        <section class="province">
             <ul @click="e=>getCityList(e.target.dataset.id)">
                <li v-for="(item, index) in provinces" :key="index" :data-id="item.CityID">{{item.CityName}}</li>
            </ul>
        </section>

        <section :class="isShowCity?'active city':'city'">
            <div>

            </div>
        </section>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default{
    computed: {
        ...mapState({
            provinces: state=>state.city.provinces,
            cities: state=>state.city.cities,
            isShowCity: state=>state.city.isShowCity
        })
    },
    methods: {
        ...mapActions({
            getCityList: 'city/getCityList'
        })
    },
    mounted() {
        this.getCityList();
    },
}
</script>

<style lang="scss" scoped>
    .cityList{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all .3s ease;
        transform: translate3d(0, 100%, 0);
        background: #fff;
    }
    .province{
        height: 100%;
        overflow: scroll;
    }
    li{
        padding-left: .3rem;
        font-size: .28rem;
        height: .8rem;
        line-height: .8rem;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        margin-left: .1rem;
        position: relative;
        &:after{
            content: "";
            display: inline-block;
            padding-top: .16rem;
            padding-right: .16rem;
            border-top: 1px solid #999;
            border-right: 1px solid #999;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            position: absolute;
            right: .35rem;
            top: .3rem;
        }
    }
    .cityList.active{
        transform: translate3d(0, 0, 0);
    }
    .city{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: scroll;
        background: rgba(0,0,0,.6);
    }
    .city>div{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all .3s ease;
        transform: translate3d(100%, 0, 0);
        background: #fff;
    }
    .city.active>div{

        transform: translate3d(30%, 0, 0);
    }
</style>

