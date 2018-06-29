<template>
    <div>
        <div>
            <router-link to="/my/order/finish">
                <span>已完成订单</span>
            </router-link>
            <router-link to="/my/order/unfinish">
                <span>未完成订单</span>
            </router-link>
        </div>
     <div>
         <router-view></router-view>
     </div>
</div>
  
</template>
<script>
export default {
    data(){
        return {

        }
    }
}
</script>
