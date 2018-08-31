<template>
	<div>
		<button @click="changeNum('+')">+</button>
		<span>{{num}}</span>
		<span>getters: {{num3}}</span>
		<span v-for="(item, index) in oddList" :key="index">{{item}}</span>
		<button @click="changeNum('-')">-</button>	
	</div>
</template>

<script>
	import {mapState, mapGetters, mapMutations} from 'vuex';
	export default {
		computed: {
			...mapState({
				num: state=>state.app.num,
				num2: state=>state.app.num
			}),
			...mapGetters({
				num3: 'app/getNum',
				oddList: 'app/oddList'
			})
		},
		methods: {
			// ...mapMutations({
			// 	changeNum: 'changeNum'
			// })
			changeNum(type){
				this.$store.commit('app/changeNum', type);
			}
		},
		mounted() {
			console.log('this..', this);
			// console.log('this...', this, mapState({
			// 	num: state=>state.app.num,
			// 	num2: state=>state.app.num
			// }));
			// console.log('this.$store...', this.$store, this.$store.state.app.num);
		},
	}
</script>
