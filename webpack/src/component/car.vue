<template>
    <div :class="{active:isActive, hover:isActive, cls3:true, cls4:false}" @click.captcha="captchEnvent">
        <p v-if="showIf">V-if显示</p>
        <p v-else>V-else显示</p>
        <!-- <p>陈蔓杰</p> -->
        <div>
            <p>姓名:{{info.name?info.name:'匿名'}}</P>
            <p>年龄:{{info.age?info.age:'未知'}}</P>
        </div>
        <button @click.prevent.once.capture.stop="btnClick">{{showIf?'隐藏IF':'显示IF'}}</button>
        <div class="listWrap cl5" :class="[cls1,cls2]">
            <div v-for="(item, index) in data" :key="index" :id="item.spelling" :style="{background}">
                <p>{{item.spelling}}</p>
                <ul>
                    <li v-for="(value, key) in item.list" :key="key" @click="clickBrand" :data-id="index+'_'+key" :class="{active_item:value.cls}">
                        <img :src="value.CoverPhoto" alt="图片">
                        <span>{{value.Name}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="spellingWrap">
            <a :href='"#"+item' v-for="(item, index) in spelling" :key="index" @click.prevent="()=>{}">{{item}}</a>
        </div>
    </div>
</template>
<style>
    .spellingWrap{
        position: fixed;
        right: 20px;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        align-items: center;
        top: 0;
        z-index: 99;
    }
    *{
        padding: 0;
        margin: 0;
    }
    .listWrap p{
        background: #f4f4f4;
    }
    .spellingWrap a{
        text-decoration: none;
        color: #333;
    }
    li{
        list-style-type: none;
        height: 50px;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 0 15px;
    }
    li:last-child{
        border: none;
    }
    li img{
        width: 40px;
    }
    li span{
        font-size: 16px;
        margin-left: 20px;
    }
    .active_item{
        background: #c0c0c0;
        background: red;
    }
</style>

<script>
    import axios from 'axios';
    export default {
        data: function(){
            return {
                spelling: [],   //导航首字母
                data: [],
                cls1: 'active',
                cls2: 'hover',
                isActive: true,
                isHover: false,
                background: '',
                showIf: '',
                index: 0,
                info: {
                }
            }
        },
        methods: {
            // 事件修饰符
            // .stop 停止冒泡
            // .prevent 阻止默认行为
            // .once 只触发一次
            // .capture 
            getData: function(){
                axios.get('https://www.easy-mock.com/mock/5af6599acf64741ceacf1c57/es6/carBrand')
                .then(res=>{
                    console.log('res...', res);
                    // 处理数据，分装成我们需要的数据结构
                    let spelling = [],
                        data = [];
                    res.data.data.forEach((item, index)=>{
                        // item.cls = '';

                        // 添加不在列表中的字母
                        let letter = item.Spelling.slice(0,1);
                        if (spelling.indexOf(letter) == -1){
                            spelling.push(letter);
                            // 创建新的首字母对应的对象，并把当前车辆添加到list的第一项
                            data.push({
                                spelling: letter,
                                list: [item]
                            });
                        }else{
                            // 直接把车辆添加到所对应首字母的list里
                            data.forEach((value, key)=>{
                                if (letter == value.spelling){
                                    value.list.push(item);
                                }
                            })
                        }
                    })

                    // console.log('data...', data, 'spelling...', spelling);
                    this.data = data;
                    this.spelling = spelling;
                })
            },
            clickBrand: function(e){
                let id = e.target.dataset.id.split('_');
                console.log('e...', e, id);
                // let [...data] = this.data;
                let data = this.data;
                data[id[0]].list[id[1]].cls = true;
                
                this.data = data;
                this.$forceUpdate();
                console.log('car...', this.data)
            },
            btnClick: function(e){
                this.showIf = !this.showIf;
                console.log('e...', e);
                // e.stopPropagation();
            },
            captchEnvent: function(e){
                console.log('顶层捕获到了事件...', e);
            }
        },
        beforeCreate: function(){
            console.log('boforeCreate...', !this?-1: this && this.index++, 'date...', +new Date())
        },
        created: function(){
            // console.log('created...', this.index++, 'date...', +new Date())
            // 给info赋值
            setTimeout(()=>{
                // let {...info} = this.info;
                // 深拷贝实现指针改变
                // let info = Object.assign({}, this.info);
                // info.name = '刘畅';
                // info.age = '18';
                // this.info = info;

                //强制手动刷新
                this.info.name = '刘畅';
                this.info.age = 18;
                this.$forceUpdate();
                console.log('this.info...', this.info);
            }, 3000);
            ((index)=>{
                setTimeout(()=>{
                    console.log('created...', index, 'date...', +new Date())
                }, 6000);
            })(this.index)
        },
        beforeMount: function(){
            console.log('beforeMount...', this.index++, 'date...', +new Date())
        },
        // mounted: function(){

        //  },
        beforeUpdate: function(){
            console.log('beoforeUpdate...', this.index++, 'date...', +new Date())
        },
        updated: function(){
            console.log('updated...', this.index++, 'date...', +new Date())
        },
        beforeDestroy: function(){
            console.log('boforeDestory...', this.index++, 'date...', +new Date())
        },
        destroyed: function(){
            console.log('destroyed...', this.index++, 'date...', +new Date())
        },
        mounted: function(){
            console.log('mounted...', this.index++, 'date...', new Date())
            this.getData();
            axios.get('/login', {
                params: {
                    name: 'chenmanjie',
                    password: 12345678
                }
            }).then(res=>{
                // console.log('res...', res);
            })
        }
    }
</script>
