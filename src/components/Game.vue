<template>
	<div class="game-container">
		<div class="tv">
			<div class="tv__screen">
				<div class="tv__screen__text">
					<question :question='question'></question>
					<answers :answers='activeQuestion' @nextQuestion='getQuestion($event)'></answers>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Question from "./Question.vue";
	import Answer from "./Answer.vue";
	export default {
		components: {
			question: Question,
			answers: Answer
		},
		data() {
			return {
				questions: this.$store.state.questions,
				question: '',
				activeQuestion: {},
				result: {
					correct: 0,
					incorrect: 0
				}
			}
		},
		methods: {
			getQuestion(answer) {
				console.log('firing')
				if (answer) {
					this.result.correct++
				} else if (answer === false) {
					this.result.incorrect++
				} else if (answer === null) {
					console.log("Response null")
				}

				if (this.questions[0]) {
					this.gameActive = true
					this.activeQuestion = this.questions.shift()
					this.question = this.activeQuestion.question
					console.log(this.question)
				} else {
					this.$store.commit('setResults', this.result)
					this.$router.push({
						name: 'results'
					})
				}
			}
		},
		created() {
			this.getQuestion();
		}
	};
</script>

<style lang="scss">
	.game-container {
		min-height: 100vh;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.tv {
		width: 1200px;
		height: 800px;
		background-color: #966F33;
		display: flex;
		justify-content: center;
		align-items: center;
		.tv__screen {
			position: relative;
			width: 900px;
			height: 700px;
			margin: 20px 10px;
			background: #335B96;
			border-radius: 50% / 10%;
			color: white;
			display: flex;
			justify-content: center;
			align-items: center;
			&:before {
				content: "";
				position: absolute;
				top: 8%;
				bottom: 8%;
				right: -4%;
				left: -4%;
				background: #335B96;
				border-radius: 5% / 50%;
			}
			.tv__screen__text {
				width: 90%;
				height: 50%;
				position: absolute;
			}
		}
	}
</style>