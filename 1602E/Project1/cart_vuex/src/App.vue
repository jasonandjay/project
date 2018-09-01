<template>
	<div>
		<Cart v-if="isLogin"></Cart>
		<Login v-else/>
	</div>
</template>

<script>
	import Cart from './components/Cart.vue';
	import Login from './components/Login.vue';
	import {mapState} from 'vuex';
	export default {
		computed: mapState({
			isLogin: state=>state.login.isLogin
		}),
		components: {
			Cart,
			Login
		},
		mounted() {
			console.log('this...', this.isLogin);
		},
	};
</script>