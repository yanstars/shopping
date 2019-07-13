<template>
	<div class="personal">
		<router-view></router-view>
	</div>
</template>

<script>
export default {

	data () {
		return {
			activeName: 'second'
		}
	},
	methods: {
		handleClick (tab, event) {
			console.log(tab, event);
		}
	}

}
</script>




<style lang="css" scoped>
.personal {
	width: 100%;
	height: 100%;
}
</style>
