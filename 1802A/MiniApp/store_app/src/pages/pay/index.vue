<template>
    <div>
        <p>将其景框对准二维码</p>
        <p>即可自动扫描</p>
         <camera
            mode="scanCode"
          device-position="back"
          @scancode="scanCode"
          flash="auto">
        </camera>
    </div>

</template>

<script>
export default {
    methods: {
        scanCode(e){
            console.log('e...', e);
        }
    }
};
</script>

<style lang="scss" scoped>
    camera{
        width: 300rpx;
        height: 300rpx;
    }
</style>