<template>
	<div class="results-main">
		<div class="results-container">
			<h3>You got {{correct}} answers correct and {{incorrect}} incorrect</h3>
		</div>
		<div>
			<router-link to="/">
				<button>Start New Game</button>
			</router-link>
		</div>
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

<style lang="scss" scoped>
	.results-main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		h3 {
			font-size: 3rem;
		}
	}

	a {
		text-decoration: none;
	}

	button {
		display: block;
		width: 20rem;
		height: 6rem;
		font-size: 1.5rem;
		border-radius: 25px;
		border: 2px solid #555;
		opacity: 0.8;
		transition: 0.2s;
		&:hover {
			background-color: #333;
			color: white;
			opacity: 1;
			transition: 0.2s;
		}
	}
</style>