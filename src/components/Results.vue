<template>
	<div>
		<div class="results-container">
			<p>You got {{correct}} answers correct and {{incorrect}} incorrect</p>
		</div>
		<router-link to="/">
			<button>Start New Game</button>
		</router-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				correct: this.$store.state.results.correct_answers,
				incorrect: this.$store.state.results.incorrect_answers
			}
		}
	}
</script>

<style scoped></style>