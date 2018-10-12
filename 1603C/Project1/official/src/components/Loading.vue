<template>
    <div v-show="loading" class="loading">
        <div>
            <span></span>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
    computed:{
        ...mapState({
            loading: state=>state.loading
        })
    }
}
</script>

<style lang="scss" scoped>
.loading{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background: #c0c0c0;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        width: 1.6rem;
        height: 1.5rem;
        border-radius: .2rem;
        overflow: hidden;
    }
    span{
        width: 16rem;
        height: 1.5rem;
        display: inline-block;
        background: url('../assets/big.jpg');
        animation: pkq 1s infinite steps(8);
        background-size: contain;
    }
    @keyframes pkq{
        0%{
            transform: translateX(0);
        }
        100%{
            transform: translateX(-100%);
        }
    }
}
</style>

