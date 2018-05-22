<template>
    <div>
        <h1>我是订单页面</h1>
        <router-view></router-view>
        <div>
            <router-link to='/my/order/complete'>已完成订单</router-link>
            <router-link to='/my/order/pennding'>未完成订单</router-link>
        </div>
    </div>
</template>

<script>
    export default{}
</script>
