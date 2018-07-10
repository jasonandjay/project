<template>
    <div>
        <div class="wrap" ref="wrap">
            <List :brandList="brandList" :getMasterList="getMasterList"/>
        </div>
        <Letter :letter="letter" :changeLetter="changeLetter"/>
        <MasterList :masterCls="masterCls" :masterList="masterList"
            :hideMaster="hideMaster"/>
    </div>
</template>
<style>
.wrap{
    height: 100%;
    overflow-y: scroll;
}
</style>

<script>
import Letter from './common/Letter.vue';
import List from './common/List.vue';
import MasterList from './common/MasterList.vue';
import {debounce, throttle, lazyLoad} from './utils/utils.js';
import {mapState, mapActions} from 'vuex';


export default {
    data(){
        return {
            // letter: [],
            // brandList: [],
            masterList: [],
            masterCls: ''
        }
    },
    components: {
        Letter,
        List,
        MasterList
    },
    computed: {
        ...mapState({
            brandList: (state)=>{
                return state.index.brandList
            },
            letter: state=>state.index.letter
        })

        // brandList(){
        //     return this.$store.state.index.brandList
        // },
        // letter(){
        //     return this.$store.state.index.letter
        // }
    },
    methods: {
        ...mapActions({
            getBrandList: 'index/a',
        }),
        // 此时调用this.getBrandList() ==> this.$store.dispatch('getBrandList')

        // getBrandList(){
        //     this.$store.dispatch('getBrandList');
        // },

        getMasterList(id){
            fetch('https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID='+id)
            .then(res=>{
                res.json().then(body=>{
                    console.log('body：', body);
                    if (body.code == 1){
                        this.masterList = body.data;
                        this.masterCls = 'active';
                        setTimeout(()=>lazyLoad.init(), 10);
                    }else{
                        alert(body.msg);
                    }
                })
            })
        },

        hideMaster(){
            this.masterCls = '';
        },

        changeLetter(letter){
            if (letter == '#'){
                return;
            }
            let scrollTop = document.querySelector(`#${letter}`).offsetTop;
            console.log(letter, scrollTop);
            this.$refs.wrap.scrollTop = scrollTop;
        }
    },
    mounted(){
        this.getBrandList();
        let scroll = throttle(()=>{
            lazyLoad.loadImg();
        }, 500);
        this.$refs.wrap.onscroll = ()=>{
            scroll();
        }
        document.querySelector('.master').onscroll = ()=>{
            scroll();
        }
    }
}
</script>

