<template>
	<div class="game-start-main">
		<h1>{{ titleMsg }}</h1>
		<button @click="getQuestions()">Play</button>
		<button>Rankings</button>
	</div>
</template>

<script>
	export default {
		name: 'GameStart',
		data() {
			return {
				titleMsg: 'Let\'s Play KNOWITALL!'
			}
		},
		methods: {
			getQuestions() {
				var router = this.$router;
				this.$store.dispatch('getQuestions')
				.then(data=> {
					console.log('Request success!');
					router.push({name: 'game'})
				})
				.catch(data => {
					console.log('Request unsuccessful')
				})
			}
		}
	}
</script>

<style scoped>

</style>