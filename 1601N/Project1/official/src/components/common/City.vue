<template>
    <div>
        <p v-for="(item, index) in province" :key="index" @click="click(item.CityID)">{{item.CityName}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            province: [],
            city: []
        }
    },
    mounted(){
        fetch('https://baojia.chelun.com/v1-city-alllist.html')
        .then(res=>{
            return res.json();
        })
        .then(body=>{
            this.province = body.data;
            console.log(body);
        })
    },
    methods: {
        click(id){
            fetch(`https://baojia.chelun.com/v1-city-alllist.html?provinceid=${id}`)
                .then(res=>{
                    return res.json();
                })
                .then(body=>{
                    this.city = body.data;
                    console.log(body);
                })  
        }
    }
}
</script>

