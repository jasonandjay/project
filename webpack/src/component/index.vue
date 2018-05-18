<template>
    <!-- 伪html代码 -->
    <div id="app">
        <div id="wrapper" class="wrapper">
            <ul>
                <li v-for="(val,key) in list" :key="key">
                    <img v-bind:src="val.CoverPhoto" alt="">  
                    <p>{{val.Name}}</p> 
                </li>
            </ul>  
        </div>
        <ol>
            <li v-for="v in zmt" v-bind = "id">
                {{v}}
            </li>
        </ol>
    </div>
</template>

<style>
    /* 样式代码 */
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    body,html,#app {
        height: 100%;
        width: 100%;
    }
    .wrapper {
        height: 100%;
        width: 100%;
    }
    .wrapper ul li{ 
        height: 50px;
        width: 90%;
        display: flex;
        line-height: 50px;
        padding-left: 20px;
        border-bottom: 1px solid #ccc;
        margin: 0 auto;
    }
    .wrapper ul li p {
        padding-left: 20px;
    }
    .wrapper ul li img {
        height: 100%;
    }
    ol {
        position: fixed;
        right: 10px;
        top:100px;
    }
</style>

<script>
    import axios from "axios"
    import $ from "jquery"
    import IScroll from "iscroll"
    export default {
        data: function(){
            return {
                cls : "wqnmlgb",
                title: '断剑重铸之日，骑士归来之时',
                arr: [1,2,3,4,5,6],
                list : null,
                zmm : [],
                zmt : [],
                id : null
            }
        },
        mounted() {
            this.ax()
        },
        methods : {
            ax : function () {
               axios.get("https://www.easy-mock.com/mock/5af6599acf64741ceacf1c57/es6/carBrand").then((res) => {
                    this.list = res.data.data
                    this.zm = res.data.data.Spelling
                    for(let i=0;i< this.list.length;i++){
                        this.zmm.push(this.list[i].Spelling.slice('',1))
                    }
                    for (let i = 0; i < this.list.length; i++) {
                        if(this.zmt.indexOf(this.zmm[i]) === -1){
                            this.zmt.push(this.zmm[i])
                        }
                    }
                });
             
            }
        }
    }
</script>

