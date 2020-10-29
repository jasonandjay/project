<script>
	import {getBookList} from './api/index'

	export default {
		onLaunch: async function() {
			let result = await getBookList();
			console.log('App Launch...', result);
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
